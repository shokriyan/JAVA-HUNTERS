package com.syntax.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src/test/resources/features"}
				, tags ={"@Delete"}
				, glue= {"com/syntax/stepDefinitions"}
				, dryRun=false
				, monochrome =true
						
						)

public class TestRunner {

}
