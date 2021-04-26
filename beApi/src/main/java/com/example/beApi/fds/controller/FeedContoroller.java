package com.example.beApi.fds.controller;


import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.beApi.fds.domian.Feeds;
import com.example.beApi.fds.service.FeedServiceImpl;

import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
@RestController
@RequestMapping("/feeds")
@CrossOrigin(origins="*")
public class FeedContoroller {
	
	private final FeedServiceImpl sv;

	    @PostMapping("/insert")
	    public ResponseEntity<String> insert(
	    		@RequestBody Feeds feeds){
	    	System.out.println("-----insert �۵���-------");
	    	System.out.println("getFeedsInsert()");
	    	System.out.println("feeds = " + feeds.toString());

			sv.save(feeds);
	    	
	    	return new ResponseEntity<>("insert success", HttpStatus.OK);
	    }
	    
	    @GetMapping("/list")
	    public ResponseEntity<?> findAll(){
	    	System.out.println("-----findAll �۵���-------");
	    		System.out.println("getFeedsFindAll()");
	   
			return new ResponseEntity<>(sv.findAll(), HttpStatus.OK);
	    }
	    
	    @GetMapping("/{feedNo}")
	    public ResponseEntity<?> findById(@PathVariable("feedNo") Long feedNo){
	    	System.out.println("-----findiByID �۵��� -----");
	    	System.out.println("getfindById()");
	    	
	    	return new ResponseEntity<>(sv.findById(feedNo), HttpStatus.OK);
	    }
	    
	    @DeleteMapping("/{feedNo}")
	    public ResponseEntity<String> deleteById(@PathVariable("feedNo") Long feedNo){
	    	System.out.println("-----deleteById �۵��� -----");
	    	System.out.println("getDeleteById()");
	    	System.out.println("feedNo: " + feedNo);

			sv.deleteById(feedNo);
	    	
	    	return new ResponseEntity<>("delete sucess", HttpStatus.NO_CONTENT);
	    }
	    
//	    @PutMapping("/{feedNo}")
//	    public ResponseEntity<String> update(
//	    		@RequestBody Feeds feeds,
//	    		@PathVariable long feedNo){
//	    	System.out.println("-----update �۵���-----");
////	    	System.out.println(feeds.getFeedNo());
////	    	System.out.println(feedNo);
//
////	    	service.updateDB(feedNo, feeds);
//
//			return new ResponseEntity<>("update success", HttpStatus.OK);
//	    }
	    
	    
	    

}
