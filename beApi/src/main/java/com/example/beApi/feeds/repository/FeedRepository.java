package com.example.beApi.feeds.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.beApi.feeds.domian.Feeds;

interface CustomRepository{} 
@Repository
public interface FeedRepository extends JpaRepository<Feeds, Long>, CustomRepository{
	

	public Feeds findByFeedNo(@Param("feedNo") Long feedNo);

	
	
}
