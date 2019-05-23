/************* 
 * Task Test *
 *************/

import { PsychoJS } from './lib/core-3.0.0b11.js';
import * as core from './lib/core-3.0.0b11.js';
import { TrialHandler } from './lib/data-3.0.0b11.js';
import { Scheduler } from './lib/util-3.0.0b11.js';
import * as util from './lib/util-3.0.0b11.js';
import * as visual from './lib/visual-3.0.0b11.js';
import { Sound } from './lib/sound-3.0.0b11.js';

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'use prefs'
});

// store info about the experiment session:
let expName = 'task';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const StopRightLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(StopRightLoopBegin, StopRightLoopScheduler);
flowScheduler.add(StopRightLoopScheduler);
flowScheduler.add(StopRightLoopEnd);
flowScheduler.add(quitPsychoJS, true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, false);

psychoJS.start({configURL: 'config.json', expInfo: expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.0.0b12';

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var trialClock;
var rectangle;
var triangle;
var feedbackClock;
var feedbackText;
var trial2Clock;
var circle;
var traingle2;
var feedback2Clock;
var feedbackText_2;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  rectangle = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle',
    units: psychoJS.window.units,
    width: [3, 3][0], height: [3, 3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: -1.0, interpolate: true,
  });
  triangle = new visual.Rect ({
    win: psychoJS.window, name: 'triangle',
    units: psychoJS.window.units,
    width: [3, 3][0], height: [3, 3][1],
    ori: 0, pos: ['posX', 'posY'],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: -1.0, interpolate: true,
  });
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  
  feedbackText = new visual.TextStim({
    win : psychoJS.window,
    name : 'feedbackText',
    text : 'default text',
    font : 'Arial',
    pos : [0, 0], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color('black'),  opacity : 1,
    depth : -1.0 
  });
  
  // Initialize components for Routine "trial2"
  trial2Clock = new util.Clock();
  circle = new visual.Rect ({
    win: psychoJS.window, name: 'circle',
    units: psychoJS.window.units,
    width: [3, 3][0], height: [3, 3][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: -1.0, interpolate: true,
  });
  traingle2 = new visual.Rect ({
    win: psychoJS.window, name: 'traingle2',
    units: psychoJS.window.units,
    width: [3, 3][0], height: [3, 3][1],
    ori: 0, pos: [5, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: -1.0, interpolate: true,
  });
  // Initialize components for Routine "feedback2"
  feedback2Clock = new util.Clock();
  
  feedbackText_2 = new visual.TextStim({
    win : psychoJS.window,
    name : 'feedbackText_2',
    text : 'default text',
    font : 'Arial',
    pos : [0, 0], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color('black'),  opacity : 1,
    depth : -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var StopRight;
function StopRightLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  StopRight = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'StopRight'});
  psychoJS.experiment.addLoop(StopRight); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisStopRight of StopRight) {
    thisScheduler.add(importConditions(StopRight));
    const SquaresLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(SquaresLoopBegin, SquaresLoopScheduler);
    thisScheduler.add(SquaresLoopScheduler);
    thisScheduler.add(SquaresLoopEnd);
    const CirclesLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(CirclesLoopBegin, CirclesLoopScheduler);
    thisScheduler.add(CirclesLoopScheduler);
    thisScheduler.add(CirclesLoopEnd);
    thisScheduler.add(endLoopIteration(thisStopRight));
  }

  return Scheduler.Event.NEXT;
}

var Squares;
function SquaresLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Squares = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions1.csv',
    seed: undefined, name: 'Squares'});
  psychoJS.experiment.addLoop(Squares); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisSquare of Squares) {
    thisScheduler.add(importConditions(Squares));
    thisScheduler.add(trialRoutineBegin);
    thisScheduler.add(trialRoutineEachFrame);
    thisScheduler.add(trialRoutineEnd);
    thisScheduler.add(feedbackRoutineBegin);
    thisScheduler.add(feedbackRoutineEachFrame);
    thisScheduler.add(feedbackRoutineEnd);
    thisScheduler.add(endLoopIteration(thisSquare));
  }

  return Scheduler.Event.NEXT;
}


function SquaresLoopEnd() {
  psychoJS.experiment.removeLoop(Squares);

  return Scheduler.Event.NEXT;
}

var Circles;
function CirclesLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Circles = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'Circles'});
  psychoJS.experiment.addLoop(Circles); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisCircle of Circles) {
    thisScheduler.add(importConditions(Circles));
    thisScheduler.add(trial2RoutineBegin);
    thisScheduler.add(trial2RoutineEachFrame);
    thisScheduler.add(trial2RoutineEnd);
    thisScheduler.add(feedback2RoutineBegin);
    thisScheduler.add(feedback2RoutineEachFrame);
    thisScheduler.add(feedback2RoutineEnd);
    thisScheduler.add(endLoopIteration(thisCircle));
  }

  return Scheduler.Event.NEXT;
}


function CirclesLoopEnd() {
  psychoJS.experiment.removeLoop(Circles);

  return Scheduler.Event.NEXT;
}


function StopRightLoopEnd() {
  psychoJS.experiment.removeLoop(StopRight);

  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var resp;
var trialComponents;
function trialRoutineBegin() {
  //------Prepare to start Routine 'trial'-------
  t = 0;
  trialClock.reset(); // clock
  frameN = -1;
  routineTimer.add(3.000000);
  // update component parameters for each repeat
  resp = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  trialComponents = [];
  trialComponents.push(rectangle);
  trialComponents.push(triangle);
  trialComponents.push(resp);
  
  for (const thisComponent of trialComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
var continueRoutine;
function trialRoutineEachFrame() {
  //------Loop for each frame of Routine 'trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = trialClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *rectangle* updates
  if (t >= 1 && rectangle.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    rectangle.tStart = t;  // (not accounting for frame time here)
    rectangle.frameNStart = frameN;  // exact frame index
    rectangle.setAutoDraw(true);
  }
  frameRemains = 1 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (rectangle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    rectangle.setAutoDraw(false);
  }
  
  // *triangle* updates
  if (t >= 2.4 && triangle.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    triangle.tStart = t;  // (not accounting for frame time here)
    triangle.frameNStart = frameN;  // exact frame index
    triangle.setAutoDraw(true);
  }
  frameRemains = 2.4 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (triangle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    triangle.setAutoDraw(false);
  }
  
  // *resp* updates
  if (t >= 2.4 && resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    resp.tStart = t;  // (not accounting for frame time here)
    resp.frameNStart = frameN;  // exact frame index
    resp.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(resp.clock.reset) // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }
  frameRemains = 2.4 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    resp.status = PsychoJS.Status.STOPPED;
  }
  if (resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['left', 'right']});
    
    // check for quit:
    if ("escape" in theseKeys) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      if (resp.keys.length == 0) {  // then this was the first keypress
        resp.keys = theseKeys[0];  // just the first key pressed
        resp.rt = resp.clock.getTime();
        // was this 'correct'?
        if (resp.keys == 'corrAns') {
            resp.corr = 1;
        } else {
            resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of trialComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEnd() {
  //------Ending Routine 'trial'-------
  for (const thisComponent of trialComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // check responses
  if (['', [], undefined].indexOf(resp.keys) >= 0) {    // No response was made
      resp.keys = undefined;
  }
  // was no response the correct answer?!
  if (resp.keys == undefined) {
    if (psychoJS.str('corrAns').toLowerCase() == 'none') {
       resp.corr = 1  // correct non-response
    } else {
       resp.corr = 0  // failed to respond (incorrectly)
    }
  }
  // store data for thisExp (ExperimentHandler)
  psychoJS.experiment.addData('resp.keys', resp.keys);
  psychoJS.experiment.addData('resp.corr', resp.corr);
  if (resp.keys != undefined) {  // we had a response
      psychoJS.experiment.addData('resp.rt', resp.rt);
      routineTimer.reset();
      }
  return Scheduler.Event.NEXT;
}

var feedbackComponents;
function feedbackRoutineBegin() {
  //------Prepare to start Routine 'feedback'-------
  t = 0;
  feedbackClock.reset(); // clock
  frameN = -1;
  routineTimer.add(1.000000);
  // update component parameters for each repeat
  
  feedbackText.setText(msg);
  // keep track of which components have finished
  feedbackComponents = [];
  feedbackComponents.push(feedbackText);
  
  for (const thisComponent of feedbackComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function feedbackRoutineEachFrame() {
  //------Loop for each frame of Routine 'feedback'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = feedbackClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  
  // *feedbackText* updates
  if (t >= 0.0 && feedbackText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    feedbackText.tStart = t;  // (not accounting for frame time here)
    feedbackText.frameNStart = frameN;  // exact frame index
    feedbackText.setAutoDraw(true);
  }
  frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (feedbackText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    feedbackText.setAutoDraw(false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of feedbackComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEnd() {
  //------Ending Routine 'feedback'-------
  for (const thisComponent of feedbackComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  return Scheduler.Event.NEXT;
}

var resp2;
var trial2Components;
function trial2RoutineBegin() {
  //------Prepare to start Routine 'trial2'-------
  t = 0;
  trial2Clock.reset(); // clock
  frameN = -1;
  routineTimer.add(3.000000);
  // update component parameters for each repeat
  resp2 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  trial2Components = [];
  trial2Components.push(circle);
  trial2Components.push(traingle2);
  trial2Components.push(resp2);
  
  for (const thisComponent of trial2Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function trial2RoutineEachFrame() {
  //------Loop for each frame of Routine 'trial2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = trial2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *circle* updates
  if (t >= 1 && circle.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    circle.tStart = t;  // (not accounting for frame time here)
    circle.frameNStart = frameN;  // exact frame index
    circle.setAutoDraw(true);
  }
  frameRemains = 1 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (circle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    circle.setAutoDraw(false);
  }
  
  // *traingle2* updates
  if (t >= 2.4 && traingle2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    traingle2.tStart = t;  // (not accounting for frame time here)
    traingle2.frameNStart = frameN;  // exact frame index
    traingle2.setAutoDraw(true);
  }
  frameRemains = 2.4 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (traingle2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    traingle2.setAutoDraw(false);
  }
  
  // *resp2* updates
  if (t >= 2.4 && resp2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    resp2.tStart = t;  // (not accounting for frame time here)
    resp2.frameNStart = frameN;  // exact frame index
    resp2.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(resp2.clock.reset) // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }
  frameRemains = 2.4 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (resp2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    resp2.status = PsychoJS.Status.STOPPED;
  }
  if (resp2.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['left', 'right']});
    
    // check for quit:
    if ("escape" in theseKeys) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      if (resp2.keys.length == 0) {  // then this was the first keypress
        resp2.keys = theseKeys[0];  // just the first key pressed
        resp2.rt = resp2.clock.getTime();
        // was this 'correct'?
        if (resp2.keys == None) {
            resp2.corr = 1;
        } else {
            resp2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of trial2Components)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function trial2RoutineEnd() {
  //------Ending Routine 'trial2'-------
  for (const thisComponent of trial2Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // check responses
  if (['', [], undefined].indexOf(resp2.keys) >= 0) {    // No response was made
      resp2.keys = undefined;
  }
  // was no response the correct answer?!
  if (resp2.keys == undefined) {
    if (psychoJS.str(None).toLowerCase() == 'none') {
       resp2.corr = 1  // correct non-response
    } else {
       resp2.corr = 0  // failed to respond (incorrectly)
    }
  }
  // store data for thisExp (ExperimentHandler)
  psychoJS.experiment.addData('resp2.keys', resp2.keys);
  psychoJS.experiment.addData('resp2.corr', resp2.corr);
  if (resp2.keys != undefined) {  // we had a response
      psychoJS.experiment.addData('resp2.rt', resp2.rt);
      routineTimer.reset();
      }
  return Scheduler.Event.NEXT;
}

var feedback2Components;
function feedback2RoutineBegin() {
  //------Prepare to start Routine 'feedback2'-------
  t = 0;
  feedback2Clock.reset(); // clock
  frameN = -1;
  routineTimer.add(1.000000);
  // update component parameters for each repeat
  
  feedbackText_2.setText(msg);
  // keep track of which components have finished
  feedback2Components = [];
  feedback2Components.push(feedbackText_2);
  
  for (const thisComponent of feedback2Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function feedback2RoutineEachFrame() {
  //------Loop for each frame of Routine 'feedback2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = feedback2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  
  // *feedbackText_2* updates
  if (t >= 0.0 && feedbackText_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    feedbackText_2.tStart = t;  // (not accounting for frame time here)
    feedbackText_2.frameNStart = frameN;  // exact frame index
    feedbackText_2.setAutoDraw(true);
  }
  frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (feedbackText_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    feedbackText_2.setAutoDraw(false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of feedback2Components)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function feedback2RoutineEnd() {
  //------Ending Routine 'feedback2'-------
  for (const thisComponent of feedback2Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  return Scheduler.Event.NEXT;
}


function endLoopIteration(thisTrial) {
  // ------Prepare for next entry------
  return function () {
    if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(isCompleted) {
  psychoJS.window.close();
  psychoJS.quit({isCompleted});

  return Scheduler.Event.QUIT;
}
