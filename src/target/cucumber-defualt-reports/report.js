$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("target/test-classes/features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: SyntaxTeam"
    }
  ],
  "line": 3,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 2677352153,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "OrangeHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 202781230,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Valid login",
  "description": "",
  "id": "login-feature;valid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@valid"
    },
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter \"admin\" and \"admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 9
    },
    {
      "val": "admin123",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 203542024,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 1597610183,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_successfully_logged_in()"
});
formatter.result({
  "duration": 31499052,
  "status": "passed"
});
formatter.after({
  "duration": 90136006,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@invalid"
    },
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I see error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "login-feature;invalid-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ],
      "line": 21,
      "id": "login-feature;invalid-login;;1"
    },
    {
      "cells": [
        "Admin",
        "Monkey123",
        "Invalid credentials"
      ],
      "line": 22,
      "id": "login-feature;invalid-login;;2"
    },
    {
      "cells": [
        "Monkey",
        "admin123",
        "Invalid credentials"
      ],
      "line": 23,
      "id": "login-feature;invalid-login;;3"
    },
    {
      "cells": [
        "Monkey",
        "Monkey123",
        "Invalid credentials"
      ],
      "line": 24,
      "id": "login-feature;invalid-login;;4"
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ],
      "line": 25,
      "id": "login-feature;invalid-login;;5"
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ],
      "line": 26,
      "id": "login-feature;invalid-login;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1807372306,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "OrangeHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 28861662,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    },
    {
      "line": 14,
      "name": "@regression"
    },
    {
      "line": 14,
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I enter \"Admin\" and \"Monkey123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I see error message \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 9
    },
    {
      "val": "Monkey123",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 197191411,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 510656532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.i_see_error_message(String)"
});
formatter.result({
  "duration": 31208470,
  "status": "passed"
});
formatter.after({
  "duration": 80819265,
  "status": "passed"
});
formatter.before({
  "duration": 1901636498,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "OrangeHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 35578503,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    },
    {
      "line": 14,
      "name": "@regression"
    },
    {
      "line": 14,
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I enter \"Monkey\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I see error message \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Monkey",
      "offset": 9
    },
    {
      "val": "admin123",
      "offset": 22
    }
  ],
  "location": "LoginPageSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 226909832,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 276194705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.i_see_error_message(String)"
});
formatter.result({
  "duration": 31181219,
  "status": "passed"
});
formatter.after({
  "duration": 85980841,
  "status": "passed"
});
formatter.before({
  "duration": 1968765920,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "OrangeHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 35804247,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    },
    {
      "line": 14,
      "name": "@regression"
    },
    {
      "line": 14,
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I enter \"Monkey\" and \"Monkey123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I see error message \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Monkey",
      "offset": 9
    },
    {
      "val": "Monkey123",
      "offset": 22
    }
  ],
  "location": "LoginPageSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 214482097,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 258641989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.i_see_error_message(String)"
});
formatter.result({
  "duration": 33217959,
  "status": "passed"
});
formatter.after({
  "duration": 83201783,
  "status": "passed"
});
formatter.before({
  "duration": 1841399506,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "OrangeHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 29479670,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    },
    {
      "line": 14,
      "name": "@regression"
    },
    {
      "line": 14,
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I enter \"\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I see error message \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    },
    {
      "val": "admin123",
      "offset": 16
    }
  ],
  "location": "LoginPageSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 184278106,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 82421931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.i_see_error_message(String)"
});
formatter.result({
  "duration": 25622284,
  "status": "passed"
});
formatter.after({
  "duration": 78054610,
  "status": "passed"
});
formatter.before({
  "duration": 1899715607,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "OrangeHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 26059542,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    },
    {
      "line": 14,
      "name": "@regression"
    },
    {
      "line": 14,
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I enter \"Admin\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I see error message \"Password cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 9
    },
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 178167583,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 75276763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.i_see_error_message(String)"
});
formatter.result({
  "duration": 26611793,
  "status": "passed"
});
formatter.after({
  "duration": 82251976,
  "status": "passed"
});
});