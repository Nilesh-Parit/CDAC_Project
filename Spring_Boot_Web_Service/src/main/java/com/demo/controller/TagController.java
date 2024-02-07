package com.demo.controller;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.demo.models.Recipe;
import com.demo.models.Tag;
import com.demo.service.TagService;


@RestController
@CrossOrigin("*")
public class TagController {
	@Autowired
	TagService tservice;
	
	@GetMapping("/tags")
	public ResponseEntity<List<Tag>> getallTags(){
		List<Tag> tlist=tservice.getAllTags();
		return ResponseEntity.ok(tlist);	
	}
	
	@GetMapping("/tag/{tagid}")
	public ResponseEntity<Tag> getById(@PathVariable int tagid){
		Tag t=tservice.getTagById(tagid);
		if (t!=null)
			return ResponseEntity.ok(t);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	@PostMapping("tag/{tagid}")
	public ResponseEntity<String> addNewTag(@RequestBody Tag t){
		tservice.addNewTag(t);
		return ResponseEntity.ok("Tag added successfully");
	}
	
	@PutMapping("tag/{tagid}")
	public ResponseEntity<String> updateTag(@RequestBody Tag t){
		tservice.updateTagById(t);
		return ResponseEntity.ok("Tag updated successfully");	
	}
	
	@DeleteMapping("/tag/{tagid}")
	public ResponseEntity<String> DeleteTag(@PathVariable int tagid){
		tservice.deleteTagById(tagid);
		return ResponseEntity.ok("Tag deleted successfully");	
	}
	
	@GetMapping("/tag/{tagId}/recipes")
	public ResponseEntity<Set<Recipe>> getRecipesByTag(@PathVariable int tagId) {
	    Set<Recipe> recipes = tservice.getRecipesByTag(tagId);
	    if (recipes != null)
	        return ResponseEntity.ok(recipes);
	    else
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
}
