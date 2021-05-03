package com.example.beApi.security.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public class SecurityRuntimeException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    private final String message;
    private final String httpStatus;
}
