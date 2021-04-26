package com.example.beApi.file.domain;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "files")
@NoArgsConstructor
@AllArgsConstructor
public class File {

    @Id
    @GeneratedValue

    @Column(name = "file_no")
    private long fileNo;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;
}
