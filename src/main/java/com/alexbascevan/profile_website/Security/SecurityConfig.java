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
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Security configuration class for setting up Spring Security.
 * Configures authentication, authorization, and security settings for the application.
 */
@Configuration // Marks this class as a configuration class
@EnableWebSecurity // Enables Spring Security for the application
public class SecurityConfig {

    /**
     * Provides a BCryptPasswordEncoder bean for encoding passwords.
     * @return A BCryptPasswordEncoder instance.
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // Uses BCrypt for password encoding
    }

    /**
     * Provides a UserDetailsService bean to load user-specific data.
     * @return An instance of UserDetailsServiceImpl.
     */
    @Bean
    public UserDetailsService userDetailsService() {
        return new UserDetailsServiceImpl(); // Custom implementation to load user details
    }

    /**
     * Provides an AuthenticationManager bean for managing authentication.
     * @return An AuthenticationManager instance configured with DaoAuthenticationProvider.
     */
    @Bean
    public AuthenticationManager authenticationManager() {
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsService()); // Set custom user details service
        authenticationProvider.setPasswordEncoder(passwordEncoder()); // Set password encoder

        ProviderManager providerManager = new ProviderManager(authenticationProvider); // Create ProviderManager with authentication provider
        return providerManager; // Return configured AuthenticationManager
    }

    /**
     * Configures the security filter chain for handling HTTP requests.
     * @param http The HttpSecurity object used to configure security settings.
     * @return The configured SecurityFilterChain.
     * @throws Exception If an error occurs during configuration.
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/").permitAll() // Allow unrestricted access to the root URL
                .requestMatchers(PathRequest.toH2Console()).permitAll() // Allow unrestricted access to H2 database console
                .anyRequest().authenticated() // Require authentication for all other requests
            )
            .httpBasic(Customizer.withDefaults()) // Enable basic HTTP authentication
            .formLogin(Customizer.withDefaults()); // Enable form-based login

        http.csrf(csrf -> csrf.disable()); // Disable CSRF protection for H2 console
        http.headers(headers -> headers.frameOptions(frame -> frame.sameOrigin())); // Allow same-origin framing for H2 console

        return http.build(); // Build and return the configured SecurityFilterChain
    }
}
