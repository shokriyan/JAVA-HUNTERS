package com.syntax.runners;


import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.syntax.utils.BaseClass;
import com.vimalselvam.cucumber.listener.Reporter;
import com.vimalselvam.cucumber.listener.ExtentCucumberFormatter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"."}
				, glue= {"com/syntax/stepDefinitions"}
				,plugin= {"pretty"
				, "html:src/target/cucumber-defualt-reports"
				,"json:target/cucumber.json"
				,"rerun:target/rerun.txt"
				,"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"
				}
				,tags= {"@login"}
				,dryRun=false
				,monochrome=true
				)
public class TestRunner {
	
	@AfterClass
	public static void AfterClass() {
		Reporter.loadXMLConfig(new File(BaseClass.getReportConfigPath()));
		
		Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
		 Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
	     Reporter.setSystemInfo("Machine", "Windows 10" + "64 Bit");
	     Reporter.setSystemInfo("Selenium", "3.7.0");
	     Reporter.setSystemInfo("Maven", "3.5.2");
	     Reporter.setSystemInfo("Java Version", "1.8.0_151");
		Reporter.setTestRunnerOutput("Orange HRM Application");
	}

}
