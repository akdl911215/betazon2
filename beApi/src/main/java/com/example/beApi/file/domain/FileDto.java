package com.example.beApi.file.domain;

import lombok.Builder;
import lombok.Getter;

import java.io.Serializable;

@Getter
public class FileDto implements Serializable {
    private static final long serialVersionUID = 1L;

    private long fileNo;
    private String title;
    private String content;

    @Builder
    public FileDto(long fileNo, String title, String content) {
        super();
        this.fileNo = fileNo;
        this.title = title;
        this.content = content;
    }
}
