package com.syntax.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= "@target/rerun.txt"
				, glue= {"com/syntax/stepDefinitions"}
				,plugin= { "pretty"
				, "html:src/target/cucumber-defualt-reports"
				,"json:target/cucumber.json"
				}
				,dryRun=false
				,monochrome=true
				)
public class FailRunner {

}
