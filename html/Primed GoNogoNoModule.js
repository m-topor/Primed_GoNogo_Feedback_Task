/********************** 
 * Primed Gonogo Test *
 **********************/

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height'
});

// store info about the experiment session:
let expName = 'Primed GoNogo';  // from the Builder filename that created this script
let expInfo = {'*Participant ID ': ''};

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
flowScheduler.add(IntructionsRoutineBegin);
flowScheduler.add(IntructionsRoutineEachFrame);
flowScheduler.add(IntructionsRoutineEnd);
flowScheduler.add(Prac1_InstrRoutineBegin);
flowScheduler.add(Prac1_InstrRoutineEachFrame);
flowScheduler.add(Prac1_InstrRoutineEnd);
const prac_1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(prac_1LoopBegin, prac_1LoopScheduler);
flowScheduler.add(prac_1LoopScheduler);
flowScheduler.add(prac_1LoopEnd);
flowScheduler.add(Prac2_InstrRoutineBegin);
flowScheduler.add(Prac2_InstrRoutineEachFrame);
flowScheduler.add(Prac2_InstrRoutineEnd);
const prac_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(prac_2LoopBegin, prac_2LoopScheduler);
flowScheduler.add(prac_2LoopScheduler);
flowScheduler.add(prac_2LoopEnd);
flowScheduler.add(Prac_OverRoutineBegin);
flowScheduler.add(Prac_OverRoutineEachFrame);
flowScheduler.add(Prac_OverRoutineEnd);
const GroupsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(GroupsLoopBegin, GroupsLoopScheduler);
flowScheduler.add(GroupsLoopScheduler);
flowScheduler.add(GroupsLoopEnd);
flowScheduler.add(thanksRoutineBegin);
flowScheduler.add(thanksRoutineEachFrame);
flowScheduler.add(thanksRoutineEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({configURL: 'config.json', expInfo: expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.0.4';

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

var IntructionsClock;
var instruction;
var Prac1_InstrClock;
var prac1_instr_t;
var prac1_trialClock;
var prac_fix;
var prac_im1;
var prax_fix2;
var image_2;
var prac1_feedbackClock;
var prac_feed;
var Prac2_InstrClock;
var prac_instr_t2;
var prac2_trialClock;
var prac2_fix;
var prac_im;
var prac2_fix2;
var prac_img2;
var prac2_feedbackClock;
var prac2_feed;
var Prac_OverClock;
var prac_over;
var SpecInstructionsClock;
var instrSR;
var trialClock;
var fixation1;
var image;
var fixation2;
var triangle;
var feedbackClock;
var feedbackText;
var thanksClock;
var thankyou;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Intructions"
  IntructionsClock = new util.Clock();
  instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction',
    text: 'Practice Sessions:\n\nYou should respond only when you see the triangle.\n\nBefore the triangle appears you will also see:\nA   circle --> press    C    after the triangle.\n\nA   square --> press    M    after the triangle. \n\n\n\nPlease be as fast and accurate as you can. \n\nPress any key to continue onto the next instruction screen.',
    font: 'Arial',
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Prac1_Instr"
  Prac1_InstrClock = new util.Clock();
  prac1_instr_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac1_instr_t',
    text: 'Practice session 1. \nPlease follow instructions below. \n\nIf you see a circle: \nalways respond with the letter  C. \n\nIf you see a square:\nrespond with the letter  M  only if the triangle is in the middle. \n\nDO NOT press anything if the triangle is positioned on the right.\n\nPress any key to begin.\n',
    font: 'Arial',
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "prac1_trial"
  prac1_trialClock = new util.Clock();
  
  prac_fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_fix',
    text: '+',
    font: 'Arial',
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  prac_im1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'prac_im1', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  prax_fix2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'prax_fix2',
    text: '+',
    font: 'Arial',
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', 
    image : 'triangle.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "prac1_feedback"
  prac1_feedbackClock = new util.Clock();
  
  prac_feed = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_feed',
    text: 'default text',
    font: 'Arial',
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Prac2_Instr"
  Prac2_InstrClock = new util.Clock();
  prac_instr_t2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_instr_t2',
    text: 'Now the rules change - session 2. \n\nIf you see a circle: \nrespond with the letter  C   only if the triangle is in the middle. \n\nDo not press anything if the triangle is positioned on the left.\n \n\nIf you see a square:\nAlways respond with the letter  M   \n\nPress any key to begin.',
    font: 'Arial',
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "prac2_trial"
  prac2_trialClock = new util.Clock();
  
  prac2_fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac2_fix',
    text: '+',
    font: 'Arial',
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  prac_im = new visual.ImageStim({
    win : psychoJS.window,
    name : 'prac_im', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  prac2_fix2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac2_fix2',
    text: '+',
    font: 'Arial',
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  prac_img2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'prac_img2', 
    image : 'triangle.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "prac2_feedback"
  prac2_feedbackClock = new util.Clock();
  
  prac2_feed = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac2_feed',
    text: 'default text',
    font: 'Arial',
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Prac_Over"
  Prac_OverClock = new util.Clock();
  prac_over = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_over',
    text: 'This is the end of the practice session. \n\nYou will now start the main experiment. \n\nPlease pay attention every time the instruction screen\nshows up. This means that the rules are changing. \n\nYou can take a short break when the instruction screen \nshows up before continuing with the experiment. \n\nThere will be six 4 minute blocks.',
    font: 'Arial',
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "SpecInstructions"
  SpecInstructionsClock = new util.Clock();
  instrSR = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrSR',
    text: 'default text',
    font: 'Arial',
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  
  fixation1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation1',
    text: '+',
    font: 'Arial',
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  fixation2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation2',
    text: '+',
    font: 'Arial',
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  triangle = new visual.ImageStim({
    win : psychoJS.window,
    name : 'triangle', 
    image : 'triangle.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  
  feedbackText = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedbackText',
    text: 'default text',
    font: 'Arial',
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thankyou = new visual.TextStim({
    win: psychoJS.window,
    name: 'thankyou',
    text: 'Thank you!\n\nThis is the end of the task.\n\nPress   Esc   to exit. \nYou can then close this window.',
    font: 'Arial',
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var ready;
var IntructionsComponents;
function IntructionsRoutineBegin() {
  //------Prepare to start Routine 'Intructions'-------
  t = 0;
  IntructionsClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  ready = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  IntructionsComponents = [];
  IntructionsComponents.push(instruction);
  IntructionsComponents.push(ready);
  
  for (const thisComponent of IntructionsComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function IntructionsRoutineEachFrame() {
  //------Loop for each frame of Routine 'Intructions'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = IntructionsClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *instruction* updates
  if (t >= 0.0 && instruction.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instruction.tStart = t;  // (not accounting for frame time here)
    instruction.frameNStart = frameN;  // exact frame index
    instruction.setAutoDraw(true);
  }

  
  // *ready* updates
  if (t >= 0.0 && ready.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    ready.tStart = t;  // (not accounting for frame time here)
    ready.frameNStart = frameN;  // exact frame index
    ready.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (ready.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys();
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      // a response ends the routine
      continueRoutine = false;
    }
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of IntructionsComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function IntructionsRoutineEnd() {
  //------Ending Routine 'Intructions'-------
  for (const thisComponent of IntructionsComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "Intructions" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var instr_resp;
var Prac1_InstrComponents;
function Prac1_InstrRoutineBegin() {
  //------Prepare to start Routine 'Prac1_Instr'-------
  t = 0;
  Prac1_InstrClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  instr_resp = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  Prac1_InstrComponents = [];
  Prac1_InstrComponents.push(prac1_instr_t);
  Prac1_InstrComponents.push(instr_resp);
  
  for (const thisComponent of Prac1_InstrComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function Prac1_InstrRoutineEachFrame() {
  //------Loop for each frame of Routine 'Prac1_Instr'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Prac1_InstrClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *prac1_instr_t* updates
  if (t >= 0.0 && prac1_instr_t.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    prac1_instr_t.tStart = t;  // (not accounting for frame time here)
    prac1_instr_t.frameNStart = frameN;  // exact frame index
    prac1_instr_t.setAutoDraw(true);
  }

  
  // *instr_resp* updates
  if (t >= 0.0 && instr_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instr_resp.tStart = t;  // (not accounting for frame time here)
    instr_resp.frameNStart = frameN;  // exact frame index
    instr_resp.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { instr_resp.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (instr_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys();
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      if (instr_resp.keys.length === 0) {  // then this was the first keypress
        instr_resp.keys = theseKeys[0];  // just the first key pressed
        instr_resp.rt = instr_resp.clock.getTime();
        // a response ends the routine
        continueRoutine = false;
      }
    }
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of Prac1_InstrComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Prac1_InstrRoutineEnd() {
  //------Ending Routine 'Prac1_Instr'-------
  for (const thisComponent of Prac1_InstrComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (instr_resp.keys === undefined || instr_resp.keys.length === 0) {    // No response was made
      instr_resp.keys = undefined;
  }
  
  psychoJS.experiment.addData('instr_resp.keys', instr_resp.keys);
  if (typeof instr_resp.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('instr_resp.rt', instr_resp.rt);
      routineTimer.reset();
      }
  
  // the Routine "Prac1_Instr" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var prac_1;
function prac_1LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  prac_1 = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'pconditions1.csv',
    seed: undefined, name: 'prac_1'});
  psychoJS.experiment.addLoop(prac_1); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisPrac_1 of prac_1) {
    thisScheduler.add(importConditions(prac_1));
    thisScheduler.add(prac1_trialRoutineBegin);
    thisScheduler.add(prac1_trialRoutineEachFrame);
    thisScheduler.add(prac1_trialRoutineEnd);
    thisScheduler.add(prac1_feedbackRoutineBegin);
    thisScheduler.add(prac1_feedbackRoutineEachFrame);
    thisScheduler.add(prac1_feedbackRoutineEnd);
    thisScheduler.add(endLoopIteration(thisPrac_1));
  }

  return Scheduler.Event.NEXT;
}


function prac_1LoopEnd() {
  psychoJS.experiment.removeLoop(prac_1);

  return Scheduler.Event.NEXT;
}

var prac_2;
function prac_2LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  prac_2 = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'pconditions2.csv',
    seed: undefined, name: 'prac_2'});
  psychoJS.experiment.addLoop(prac_2); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisPrac_2 of prac_2) {
    thisScheduler.add(importConditions(prac_2));
    thisScheduler.add(prac2_trialRoutineBegin);
    thisScheduler.add(prac2_trialRoutineEachFrame);
    thisScheduler.add(prac2_trialRoutineEnd);
    thisScheduler.add(prac2_feedbackRoutineBegin);
    thisScheduler.add(prac2_feedbackRoutineEachFrame);
    thisScheduler.add(prac2_feedbackRoutineEnd);
    thisScheduler.add(endLoopIteration(thisPrac_2));
  }

  return Scheduler.Event.NEXT;
}


function prac_2LoopEnd() {
  psychoJS.experiment.removeLoop(prac_2);

  return Scheduler.Event.NEXT;
}

var Groups;
function GroupsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Groups = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'groups.xlsx',
    seed: undefined, name: 'Groups'});
  psychoJS.experiment.addLoop(Groups); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisGroup of Groups) {
    thisScheduler.add(importConditions(Groups));
    const masterBlockLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(masterBlockLoopBegin, masterBlockLoopScheduler);
    thisScheduler.add(masterBlockLoopScheduler);
    thisScheduler.add(masterBlockLoopEnd);
    thisScheduler.add(endLoopIteration(thisGroup));
  }

  return Scheduler.Event.NEXT;
}

var masterBlock;
function masterBlockLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  masterBlock = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: countgroups,
    seed: undefined, name: 'masterBlock'});
  psychoJS.experiment.addLoop(masterBlock); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisMasterBlock of masterBlock) {
    thisScheduler.add(importConditions(masterBlock));
    const Block1LoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(Block1LoopBegin, Block1LoopScheduler);
    thisScheduler.add(Block1LoopScheduler);
    thisScheduler.add(Block1LoopEnd);
    thisScheduler.add(endLoopIteration(thisMasterBlock));
  }

  return Scheduler.Event.NEXT;
}

var Block1;
function Block1LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Block1 = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: masterFile,
    seed: undefined, name: 'Block1'});
  psychoJS.experiment.addLoop(Block1); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisBlock1 of Block1) {
    thisScheduler.add(importConditions(Block1));
    thisScheduler.add(SpecInstructionsRoutineBegin);
    thisScheduler.add(SpecInstructionsRoutineEachFrame);
    thisScheduler.add(SpecInstructionsRoutineEnd);
    const StopSideLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(StopSideLoopBegin, StopSideLoopScheduler);
    thisScheduler.add(StopSideLoopScheduler);
    thisScheduler.add(StopSideLoopEnd);
    thisScheduler.add(endLoopIteration(thisBlock1));
  }

  return Scheduler.Event.NEXT;
}

var StopSide;
function StopSideLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  StopSide = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: condFile,
    seed: undefined, name: 'StopSide'});
  psychoJS.experiment.addLoop(StopSide); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisStopSide of StopSide) {
    thisScheduler.add(importConditions(StopSide));
    thisScheduler.add(trialRoutineBegin);
    thisScheduler.add(trialRoutineEachFrame);
    thisScheduler.add(trialRoutineEnd);
    thisScheduler.add(feedbackRoutineBegin);
    thisScheduler.add(feedbackRoutineEachFrame);
    thisScheduler.add(feedbackRoutineEnd);
    thisScheduler.add(endLoopIteration(thisStopSide));
  }

  return Scheduler.Event.NEXT;
}


function StopSideLoopEnd() {
  psychoJS.experiment.removeLoop(StopSide);

  return Scheduler.Event.NEXT;
}


function Block1LoopEnd() {
  psychoJS.experiment.removeLoop(Block1);

  return Scheduler.Event.NEXT;
}


function masterBlockLoopEnd() {
  psychoJS.experiment.removeLoop(masterBlock);

  return Scheduler.Event.NEXT;
}


function GroupsLoopEnd() {
  psychoJS.experiment.removeLoop(Groups);

  return Scheduler.Event.NEXT;
}

var jitter;
var prac_resp;
var prac1_trialComponents;
function prac1_trialRoutineBegin() {
  //------Prepare to start Routine 'prac1_trial'-------
  t = 0;
  prac1_trialClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  jitter = Math.random() * (1.0 - 0.5) + 0.5;
   
  jitter = round(jitter, 1);
  
  function round(value, precision) {
      var x = Math.pow(10, precision);
      return Math.round(value * x) / x;
  }
  prac_im1.setImage(imageFile);
  image_2.setPos([posX, posY]);
  prac_resp = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  prac1_trialComponents = [];
  prac1_trialComponents.push(prac_fix);
  prac1_trialComponents.push(prac_im1);
  prac1_trialComponents.push(prax_fix2);
  prac1_trialComponents.push(image_2);
  prac1_trialComponents.push(prac_resp);
  
  for (const thisComponent of prac1_trialComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function prac1_trialRoutineEachFrame() {
  //------Loop for each frame of Routine 'prac1_trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = prac1_trialClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  
  // *prac_fix* updates
  if (t >= 0.0 && prac_fix.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    prac_fix.tStart = t;  // (not accounting for frame time here)
    prac_fix.frameNStart = frameN;  // exact frame index
    prac_fix.setAutoDraw(true);
  }

  frameRemains = 0.0 + jitter - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (prac_fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    prac_fix.setAutoDraw(false);
  }
  
  // *prac_im1* updates
  if (t >= jitter && prac_im1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    prac_im1.tStart = t;  // (not accounting for frame time here)
    prac_im1.frameNStart = frameN;  // exact frame index
    prac_im1.setAutoDraw(true);
  }

  frameRemains = jitter + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (prac_im1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    prac_im1.setAutoDraw(false);
  }
  
  // *prax_fix2* updates
  if (t >= (jitter + 0.1) && prax_fix2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    prax_fix2.tStart = t;  // (not accounting for frame time here)
    prax_fix2.frameNStart = frameN;  // exact frame index
    prax_fix2.setAutoDraw(true);
  }

  frameRemains = (jitter + 0.1) + 0.9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (prax_fix2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    prax_fix2.setAutoDraw(false);
  }
  
  // *image_2* updates
  if (t >= (jitter + 1.0) && image_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    image_2.tStart = t;  // (not accounting for frame time here)
    image_2.frameNStart = frameN;  // exact frame index
    image_2.setAutoDraw(true);
  }

  frameRemains = (jitter + 1.0) + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    image_2.setAutoDraw(false);
  }
  
  // *prac_resp* updates
  if (t >= (jitter + 1.0) && prac_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    prac_resp.tStart = t;  // (not accounting for frame time here)
    prac_resp.frameNStart = frameN;  // exact frame index
    prac_resp.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { prac_resp.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  frameRemains = (jitter + 1.0) + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (prac_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    prac_resp.status = PsychoJS.Status.FINISHED;
  }

  if (prac_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['c', 'm']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      if (prac_resp.keys.length === 0) {  // then this was the first keypress
        prac_resp.keys = theseKeys[0];  // just the first key pressed
        prac_resp.rt = prac_resp.clock.getTime();
        // was this 'correct'?
        if (prac_resp.keys == corrAns) {
            prac_resp.corr = 1;
        } else {
            prac_resp.corr = 0;
        }
      }
    }
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of prac1_trialComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function prac1_trialRoutineEnd() {
  //------Ending Routine 'prac1_trial'-------
  for (const thisComponent of prac1_trialComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  
  // check responses
  if (prac_resp.keys === undefined || prac_resp.keys.length === 0) {    // No response was made
      prac_resp.keys = undefined;
  }
  
  // was no response the correct answer?!
  if (prac_resp.keys === undefined) {
    if (['None','none',undefined].includes(corrAns)) {
       prac_resp.corr = 1  // correct non-response
    } else {
       prac_resp.corr = 0  // failed to respond (incorrectly)
    }
  }
  // store data for thisExp (ExperimentHandler)
  psychoJS.experiment.addData('prac_resp.keys', prac_resp.keys);
  psychoJS.experiment.addData('prac_resp.corr', prac_resp.corr);
  if (typeof prac_resp.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('prac_resp.rt', prac_resp.rt);
      }
  
  // the Routine "prac1_trial" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var msg;
var msgColor;
var prac1_feedbackComponents;
function prac1_feedbackRoutineBegin() {
  //------Prepare to start Routine 'prac1_feedback'-------
  t = 0;
  prac1_feedbackClock.reset(); // clock
  frameN = -1;
  routineTimer.add(0.600000);
  // update component parameters for each repeat
  if(prac_resp.corr) {
    msg='Correct!'
    msgColor='green';
  } else {
    msg='Incorrect'
    msgColor='red';
  }
  prac_feed.setColor(new util.Color(msgColor));
  prac_feed.setText(msg);
  // keep track of which components have finished
  prac1_feedbackComponents = [];
  prac1_feedbackComponents.push(prac_feed);
  
  for (const thisComponent of prac1_feedbackComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function prac1_feedbackRoutineEachFrame() {
  //------Loop for each frame of Routine 'prac1_feedback'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = prac1_feedbackClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  
  // *prac_feed* updates
  if (t >= 0.0 && prac_feed.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    prac_feed.tStart = t;  // (not accounting for frame time here)
    prac_feed.frameNStart = frameN;  // exact frame index
    prac_feed.setAutoDraw(true);
  }

  frameRemains = 0.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (prac_feed.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    prac_feed.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of prac1_feedbackComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function prac1_feedbackRoutineEnd() {
  //------Ending Routine 'prac1_feedback'-------
  for (const thisComponent of prac1_feedbackComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  return Scheduler.Event.NEXT;
}

var instr_resp2;
var Prac2_InstrComponents;
function Prac2_InstrRoutineBegin() {
  //------Prepare to start Routine 'Prac2_Instr'-------
  t = 0;
  Prac2_InstrClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  instr_resp2 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  Prac2_InstrComponents = [];
  Prac2_InstrComponents.push(prac_instr_t2);
  Prac2_InstrComponents.push(instr_resp2);
  
  for (const thisComponent of Prac2_InstrComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function Prac2_InstrRoutineEachFrame() {
  //------Loop for each frame of Routine 'Prac2_Instr'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Prac2_InstrClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *prac_instr_t2* updates
  if (t >= 0.0 && prac_instr_t2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    prac_instr_t2.tStart = t;  // (not accounting for frame time here)
    prac_instr_t2.frameNStart = frameN;  // exact frame index
    prac_instr_t2.setAutoDraw(true);
  }

  
  // *instr_resp2* updates
  if (t >= 0.0 && instr_resp2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instr_resp2.tStart = t;  // (not accounting for frame time here)
    instr_resp2.frameNStart = frameN;  // exact frame index
    instr_resp2.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { instr_resp2.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (instr_resp2.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys();
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      if (instr_resp2.keys.length === 0) {  // then this was the first keypress
        instr_resp2.keys = theseKeys[0];  // just the first key pressed
        instr_resp2.rt = instr_resp2.clock.getTime();
        // a response ends the routine
        continueRoutine = false;
      }
    }
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of Prac2_InstrComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Prac2_InstrRoutineEnd() {
  //------Ending Routine 'Prac2_Instr'-------
  for (const thisComponent of Prac2_InstrComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (instr_resp2.keys === undefined || instr_resp2.keys.length === 0) {    // No response was made
      instr_resp2.keys = undefined;
  }
  
  psychoJS.experiment.addData('instr_resp2.keys', instr_resp2.keys);
  if (typeof instr_resp2.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('instr_resp2.rt', instr_resp2.rt);
      routineTimer.reset();
      }
  
  // the Routine "Prac2_Instr" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var prac_resp2;
var prac2_trialComponents;
function prac2_trialRoutineBegin() {
  //------Prepare to start Routine 'prac2_trial'-------
  t = 0;
  prac2_trialClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  jitter = Math.random() * (1.0 - 0.5) + 0.5;
   
  jitter = round(jitter, 1);
  
  function round(value, precision) {
      var x = Math.pow(10, precision);
      return Math.round(value * x) / x;
  }
  prac_im.setImage(imageFile);
  prac_img2.setPos([posX, posY]);
  prac_resp2 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  prac2_trialComponents = [];
  prac2_trialComponents.push(prac2_fix);
  prac2_trialComponents.push(prac_im);
  prac2_trialComponents.push(prac2_fix2);
  prac2_trialComponents.push(prac_img2);
  prac2_trialComponents.push(prac_resp2);
  
  for (const thisComponent of prac2_trialComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function prac2_trialRoutineEachFrame() {
  //------Loop for each frame of Routine 'prac2_trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = prac2_trialClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  
  // *prac2_fix* updates
  if (t >= 0.0 && prac2_fix.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    prac2_fix.tStart = t;  // (not accounting for frame time here)
    prac2_fix.frameNStart = frameN;  // exact frame index
    prac2_fix.setAutoDraw(true);
  }

  frameRemains = 0.0 + jitter - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (prac2_fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    prac2_fix.setAutoDraw(false);
  }
  
  // *prac_im* updates
  if (t >= jitter && prac_im.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    prac_im.tStart = t;  // (not accounting for frame time here)
    prac_im.frameNStart = frameN;  // exact frame index
    prac_im.setAutoDraw(true);
  }

  frameRemains = jitter + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (prac_im.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    prac_im.setAutoDraw(false);
  }
  
  // *prac2_fix2* updates
  if (t >= (jitter + 0.1) && prac2_fix2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    prac2_fix2.tStart = t;  // (not accounting for frame time here)
    prac2_fix2.frameNStart = frameN;  // exact frame index
    prac2_fix2.setAutoDraw(true);
  }

  frameRemains = (jitter + 0.1) + 0.9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (prac2_fix2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    prac2_fix2.setAutoDraw(false);
  }
  
  // *prac_img2* updates
  if (t >= (jitter + 1.0) && prac_img2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    prac_img2.tStart = t;  // (not accounting for frame time here)
    prac_img2.frameNStart = frameN;  // exact frame index
    prac_img2.setAutoDraw(true);
  }

  frameRemains = (jitter + 1.0) + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (prac_img2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    prac_img2.setAutoDraw(false);
  }
  
  // *prac_resp2* updates
  if (t >= (jitter + 1.0) && prac_resp2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    prac_resp2.tStart = t;  // (not accounting for frame time here)
    prac_resp2.frameNStart = frameN;  // exact frame index
    prac_resp2.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { prac_resp2.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  frameRemains = (jitter + 1.0) + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (prac_resp2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    prac_resp2.status = PsychoJS.Status.FINISHED;
  }

  if (prac_resp2.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['c', 'm']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      if (prac_resp2.keys.length === 0) {  // then this was the first keypress
        prac_resp2.keys = theseKeys[0];  // just the first key pressed
        prac_resp2.rt = prac_resp2.clock.getTime();
        // was this 'correct'?
        if (prac_resp2.keys == corrAns) {
            prac_resp2.corr = 1;
        } else {
            prac_resp2.corr = 0;
        }
      }
    }
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of prac2_trialComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function prac2_trialRoutineEnd() {
  //------Ending Routine 'prac2_trial'-------
  for (const thisComponent of prac2_trialComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  
  // check responses
  if (prac_resp2.keys === undefined || prac_resp2.keys.length === 0) {    // No response was made
      prac_resp2.keys = undefined;
  }
  
  // was no response the correct answer?!
  if (prac_resp2.keys === undefined) {
    if (['None','none',undefined].includes(corrAns)) {
       prac_resp2.corr = 1  // correct non-response
    } else {
       prac_resp2.corr = 0  // failed to respond (incorrectly)
    }
  }
  // store data for thisExp (ExperimentHandler)
  psychoJS.experiment.addData('prac_resp2.keys', prac_resp2.keys);
  psychoJS.experiment.addData('prac_resp2.corr', prac_resp2.corr);
  if (typeof prac_resp2.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('prac_resp2.rt', prac_resp2.rt);
      }
  
  // the Routine "prac2_trial" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var prac2_feedbackComponents;
function prac2_feedbackRoutineBegin() {
  //------Prepare to start Routine 'prac2_feedback'-------
  t = 0;
  prac2_feedbackClock.reset(); // clock
  frameN = -1;
  routineTimer.add(0.600000);
  // update component parameters for each repeat
  if(prac_resp2.corr) {
    msg='Correct!'
    msgColor='green';
  } else {
    msg='Incorrect'
    msgColor='red';
  }
  prac2_feed.setColor(new util.Color(msgColor));
  prac2_feed.setText(msg);
  // keep track of which components have finished
  prac2_feedbackComponents = [];
  prac2_feedbackComponents.push(prac2_feed);
  
  for (const thisComponent of prac2_feedbackComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function prac2_feedbackRoutineEachFrame() {
  //------Loop for each frame of Routine 'prac2_feedback'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = prac2_feedbackClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  
  // *prac2_feed* updates
  if (t >= 0.0 && prac2_feed.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    prac2_feed.tStart = t;  // (not accounting for frame time here)
    prac2_feed.frameNStart = frameN;  // exact frame index
    prac2_feed.setAutoDraw(true);
  }

  frameRemains = 0.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (prac2_feed.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    prac2_feed.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of prac2_feedbackComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function prac2_feedbackRoutineEnd() {
  //------Ending Routine 'prac2_feedback'-------
  for (const thisComponent of prac2_feedbackComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  return Scheduler.Event.NEXT;
}

var pover_resp;
var Prac_OverComponents;
function Prac_OverRoutineBegin() {
  //------Prepare to start Routine 'Prac_Over'-------
  t = 0;
  Prac_OverClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  pover_resp = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  Prac_OverComponents = [];
  Prac_OverComponents.push(prac_over);
  Prac_OverComponents.push(pover_resp);
  
  for (const thisComponent of Prac_OverComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function Prac_OverRoutineEachFrame() {
  //------Loop for each frame of Routine 'Prac_Over'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Prac_OverClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *prac_over* updates
  if (t >= 0.0 && prac_over.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    prac_over.tStart = t;  // (not accounting for frame time here)
    prac_over.frameNStart = frameN;  // exact frame index
    prac_over.setAutoDraw(true);
  }

  
  // *pover_resp* updates
  if (t >= 0.0 && pover_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    pover_resp.tStart = t;  // (not accounting for frame time here)
    pover_resp.frameNStart = frameN;  // exact frame index
    pover_resp.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { pover_resp.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (pover_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys();
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      if (pover_resp.keys.length === 0) {  // then this was the first keypress
        pover_resp.keys = theseKeys[0];  // just the first key pressed
        pover_resp.rt = pover_resp.clock.getTime();
        // a response ends the routine
        continueRoutine = false;
      }
    }
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of Prac_OverComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Prac_OverRoutineEnd() {
  //------Ending Routine 'Prac_Over'-------
  for (const thisComponent of Prac_OverComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (pover_resp.keys === undefined || pover_resp.keys.length === 0) {    // No response was made
      pover_resp.keys = undefined;
  }
  
  psychoJS.experiment.addData('pover_resp.keys', pover_resp.keys);
  if (typeof pover_resp.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('pover_resp.rt', pover_resp.rt);
      routineTimer.reset();
      }
  
  // the Routine "Prac_Over" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var ready2;
var SpecInstructionsComponents;
function SpecInstructionsRoutineBegin() {
  //------Prepare to start Routine 'SpecInstructions'-------
  t = 0;
  SpecInstructionsClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  instrSR.setText(instr);
  ready2 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  SpecInstructionsComponents = [];
  SpecInstructionsComponents.push(instrSR);
  SpecInstructionsComponents.push(ready2);
  
  for (const thisComponent of SpecInstructionsComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function SpecInstructionsRoutineEachFrame() {
  //------Loop for each frame of Routine 'SpecInstructions'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = SpecInstructionsClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *instrSR* updates
  if (t >= 0 && instrSR.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instrSR.tStart = t;  // (not accounting for frame time here)
    instrSR.frameNStart = frameN;  // exact frame index
    instrSR.setAutoDraw(true);
  }

  
  // *ready2* updates
  if (t >= 0.0 && ready2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    ready2.tStart = t;  // (not accounting for frame time here)
    ready2.frameNStart = frameN;  // exact frame index
    ready2.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (ready2.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys();
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      // a response ends the routine
      continueRoutine = false;
    }
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of SpecInstructionsComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function SpecInstructionsRoutineEnd() {
  //------Ending Routine 'SpecInstructions'-------
  for (const thisComponent of SpecInstructionsComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "SpecInstructions" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var earlyresp;
var resp;
var trialComponents;
function trialRoutineBegin() {
  //------Prepare to start Routine 'trial'-------
  t = 0;
  trialClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  jitter = Math.random() * (1.0 - 0.5) + 0.5;
   
  jitter = round(jitter, 1);
  
  function round(value, precision) {
      var x = Math.pow(10, precision);
      return Math.round(value * x) / x;
  }
  image.setImage(imageFile);
  earlyresp = new core.BuilderKeyResponse(psychoJS);
  triangle.setPos([posX, posY]);
  resp = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  trialComponents = [];
  trialComponents.push(fixation1);
  trialComponents.push(image);
  trialComponents.push(earlyresp);
  trialComponents.push(fixation2);
  trialComponents.push(triangle);
  trialComponents.push(resp);
  
  for (const thisComponent of trialComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function trialRoutineEachFrame() {
  //------Loop for each frame of Routine 'trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = trialClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  
  // *fixation1* updates
  if (t >= 0.0 && fixation1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    fixation1.tStart = t;  // (not accounting for frame time here)
    fixation1.frameNStart = frameN;  // exact frame index
    fixation1.setAutoDraw(true);
  }

  frameRemains = 0.0 + jitter - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (fixation1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    fixation1.setAutoDraw(false);
  }
  
  // *image* updates
  if (t >= jitter && image.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    image.tStart = t;  // (not accounting for frame time here)
    image.frameNStart = frameN;  // exact frame index
    image.setAutoDraw(true);
  }

  frameRemains = jitter + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    image.setAutoDraw(false);
  }
  
  // *earlyresp* updates
  if (t >= jitter && earlyresp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    earlyresp.tStart = t;  // (not accounting for frame time here)
    earlyresp.frameNStart = frameN;  // exact frame index
    earlyresp.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { earlyresp.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  frameRemains = jitter + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (earlyresp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    earlyresp.status = PsychoJS.Status.FINISHED;
  }

  if (earlyresp.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys();
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      if (earlyresp.keys.length === 0) {  // then this was the first keypress
        earlyresp.keys = theseKeys[0];  // just the first key pressed
        earlyresp.rt = earlyresp.clock.getTime();
      }
    }
  }
  
  // *fixation2* updates
  if (t >= (jitter + 0.1) && fixation2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    fixation2.tStart = t;  // (not accounting for frame time here)
    fixation2.frameNStart = frameN;  // exact frame index
    fixation2.setAutoDraw(true);
  }

  frameRemains = (jitter + 0.1) + 0.9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (fixation2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    fixation2.setAutoDraw(false);
  }
  
  // *triangle* updates
  if (t >= (jitter + 1.0) && triangle.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    triangle.tStart = t;  // (not accounting for frame time here)
    triangle.frameNStart = frameN;  // exact frame index
    triangle.setAutoDraw(true);
  }

  frameRemains = (jitter + 1.0) + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (triangle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    triangle.setAutoDraw(false);
  }
  
  // *resp* updates
  if (t >= (jitter + 1.0) && resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    resp.tStart = t;  // (not accounting for frame time here)
    resp.frameNStart = frameN;  // exact frame index
    resp.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { resp.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  frameRemains = (jitter + 1.0) + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    resp.status = PsychoJS.Status.FINISHED;
  }

  if (resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['c', 'm']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      if (resp.keys.length === 0) {  // then this was the first keypress
        resp.keys = theseKeys[0];  // just the first key pressed
        resp.rt = resp.clock.getTime();
        // was this 'correct'?
        if (resp.keys == corrAns) {
            resp.corr = 1;
        } else {
            resp.corr = 0;
        }
      }
    }
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of trialComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
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
  if (earlyresp.keys === undefined || earlyresp.keys.length === 0) {    // No response was made
      earlyresp.keys = undefined;
  }
  
  psychoJS.experiment.addData('earlyresp.keys', earlyresp.keys);
  if (typeof earlyresp.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('earlyresp.rt', earlyresp.rt);
      }
  
  
  // check responses
  if (resp.keys === undefined || resp.keys.length === 0) {    // No response was made
      resp.keys = undefined;
  }
  
  // was no response the correct answer?!
  if (resp.keys === undefined) {
    if (['None','none',undefined].includes(corrAns)) {
       resp.corr = 1  // correct non-response
    } else {
       resp.corr = 0  // failed to respond (incorrectly)
    }
  }
  // store data for thisExp (ExperimentHandler)
  psychoJS.experiment.addData('resp.keys', resp.keys);
  psychoJS.experiment.addData('resp.corr', resp.corr);
  if (typeof resp.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('resp.rt', resp.rt);
      }
  
  // the Routine "trial" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var feedbackComponents;
function feedbackRoutineBegin() {
  //------Prepare to start Routine 'feedback'-------
  t = 0;
  feedbackClock.reset(); // clock
  frameN = -1;
  routineTimer.add(0.600000);
  // update component parameters for each repeat
  if(resp.corr) {
    msg='Correct!'
    msgColor='green';
  } else {
    msg='Incorrect'
    msgColor='red';
  }
  feedbackText.setColor(new util.Color(msgColor));
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

  frameRemains = 0.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (feedbackText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    feedbackText.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of feedbackComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
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

var thanksComponents;
function thanksRoutineBegin() {
  //------Prepare to start Routine 'thanks'-------
  t = 0;
  thanksClock.reset(); // clock
  frameN = -1;
  routineTimer.add(3.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  thanksComponents = [];
  thanksComponents.push(thankyou);
  
  for (const thisComponent of thanksComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function thanksRoutineEachFrame() {
  //------Loop for each frame of Routine 'thanks'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = thanksClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *thankyou* updates
  if (t >= 0.0 && thankyou.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    thankyou.tStart = t;  // (not accounting for frame time here)
    thankyou.frameNStart = frameN;  // exact frame index
    thankyou.setAutoDraw(true);
  }

  frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (thankyou.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    thankyou.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of thanksComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function thanksRoutineEnd() {
  //------Ending Routine 'thanks'-------
  for (const thisComponent of thanksComponents) {
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


function quitPsychoJS(message, isCompleted) {
  psychoJS.window.close();
  psychoJS.quit({message, isCompleted});

  return Scheduler.Event.QUIT;
}
