package com.example.beApi.feeds.domian;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.example.beApi.file.domain.File;
import lombok.*;

@NoArgsConstructor
@Entity
@Getter
@Setter
@ToString
@Table(name = "feeds")
public class Feeds {
	
	@Id
	@GeneratedValue
	@Column(name = "feed_no")
	private long feedNo;
	
	@Column(name = "title")
	private String title;
	
	@Column(name = "writer")
	private String writer;
	
	@Column(name = "content")
	private String content;
	
	@Column(name = "add_location")
	private String addLocation;
	
	@Column(name = "hash_tag")
	private String hashTag;
	
	@Column(name = "reg_date")
	private Date regDate = new Date();
	

	@Builder
	public Feeds(long feedNo, String title, String writer, 
			String content, String addLocation, String hashTag,
			String regDate) {
		super();
		this.feedNo = feedNo;
		this.title = title;
		this.writer = writer;
		this.content = content;
		this.addLocation = addLocation;
		this.hashTag = hashTag;
		this.regDate = new Date();
	}

}
