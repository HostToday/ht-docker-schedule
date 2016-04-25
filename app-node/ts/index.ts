/// <reference path="./typings/main.d.ts" />
console.log("**** starting schedule container ****");
import plugins = require("./schedule.plugins");
import ScheduleCoresock = require("./schedule.coresock");
import ScheduleEnvironment = require("./schedule.environment");
import ScheduleEvents = require("./schedule.events");
import ScheduleGit = require("./schedule.git");
import ScheduleUnitfile = require("./schedule.unitfile");

plugins.beautylog.log("modules loaded! now starting ticker!");
ScheduleEvents.startTicker();