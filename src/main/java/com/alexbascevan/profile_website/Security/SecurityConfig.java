package com.alexbascevan.profile_website.Security;

import com.alexbascevan.profile_website.Services.UserDetailsServiceImpl;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean
    public UserDetailsService userDetailsService() {
        return new UserDetailsServiceImpl();
    }

    @Bean
    public AuthenticationManager authenticationManager() {
        
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        
        authenticationProvider.setUserDetailsService(userDetailsService());
        
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        
        ProviderManager providerManager = new ProviderManager(authenticationProvider);
        
        return providerManager;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)
    throws Exception {
    http.authorizeHttpRequests(auth -> auth
    .requestMatchers("/").permitAll() // index is not authenticated
    .requestMatchers(PathRequest.toH2Console()).permitAll()//allow h2
    .anyRequest().authenticated())
    .httpBasic(Customizer.withDefaults())
    .formLogin(Customizer.withDefaults());
    
    http.csrf((csrf) -> csrf.disable());//allow h2
    http.headers((headers) -> headers.frameOptions((frame) -> frame.sameOrigin()));//allow h2
    
    return http.build();
    }

}