package com.syntax.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src/test/resources/features"}
				, glue= {"com/syntax/stepDefinitions"}
				,plugin= { "pretty"
				, "html:src/target/cucumber-defualt-reports"
				,"json:target/cucumber.json"
				}
				,tags= {"@Add"}
				, dryRun=false
				)
public class TestRunner {

}
