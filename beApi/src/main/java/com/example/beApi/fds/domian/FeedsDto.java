package com.example.beApi.fds.domian;

import java.io.Serializable;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@ToString
@Getter
public class FeedsDto implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private long feedNo;
	private String title;
	private String writer;
	private String content;
	private String addLocation;
	private String hashTag;
	private Date regDate = new Date();
	
	@Builder
	public FeedsDto(long feedNo, String title, String writer, String content, String addLocation, String hashTag,
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
	
	public Feeds toEntity() {
		return  Feeds.builder()
					 .title(title)
					 .writer(writer)
					 .content(content)
					 .addLocation(addLocation)
					 .hashTag(hashTag)
					 .build();
	}
	
}