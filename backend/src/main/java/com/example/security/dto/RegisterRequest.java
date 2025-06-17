package com.example.security.dto;

import com.example.security.enums.Role;
import lombok.Data;

@Data
public class RegisterRequest {
    private String username;
    private String password;
    private Role role;
}
