/********************* 
 * Maithili_Ldt *
 *********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Maithili_ldt';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.0039, 0.0039, 0.0039]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeRoutineRoutineBegin());
flowScheduler.add(WelcomeRoutineRoutineEachFrame());
flowScheduler.add(WelcomeRoutineRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(exitRoutineRoutineBegin());
flowScheduler.add(exitRoutineRoutineEachFrame());
flowScheduler.add(exitRoutineRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditionss.csv', 'path': 'conditionss.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var WelcomeRoutineClock;
var WelcomeText;
var WelcomeResponse;
var TrialRoutineClock;
var text;
var trial_text;
var response;
var exitRoutineClock;
var text_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "WelcomeRoutine"
  WelcomeRoutineClock = new util.Clock();
  WelcomeText = new visual.TextStim({
    win: psychoJS.window,
    name: 'WelcomeText',
    text: 'Welcome to the experiment!\nYou will be shown a series of words and non-words. The real words will be from either Hindi or Maithili.\n\nYour task is to decide if it is a real word or a non-word.\n\nEach trial will start with a plus sign (+) to help you focus.\n\nIf you see a REAL WORD (from either language), press the RIGHT ARROW key (→).\nIf you see a NON-WORD, press the LEFT ARROW key (←).\nPlease place your fingers on the arrow keys to get ready.\n\nPress the SPACEBAR to start the experiment.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  WelcomeResponse = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TrialRoutine"
  TrialRoutineClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  // --- In Begin Experiment (JS) ---
  
  // Load the Google Font for Devanagari
  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari&display=swap';
  document.head.appendChild(link);
  
  // Create a <div> element to be our text container
  let devanagariText = document.createElement('div');
  devanagariText.id = 'devanagari_text_stimulus';
  devanagariText.style.position = 'absolute';
  devanagariText.style.left = '50%';
  devanagariText.style.top = '50%';
  devanagariText.style.transform = 'translate(-50%, -50%)';
  devanagariText.style.fontFamily = '"Noto Sans Devanagari", sans-serif';
  devanagariText.style.fontSize = '48px'; // You can change this size
  devanagariText.style.color = 'black';   // You can change this color
  devanagariText.style.display = 'none';  // Start hidden
  document.body.appendChild(devanagariText);
  trial_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_text',
    text: '',
    font: 'Noto Sans Devanagari',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: 0.0,
    depth: -2.0 
  });
  
  response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exitRoutine"
  exitRoutineClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Thank you for your participation. Dont exit the window. \nPlease wait for a few seconds, the results are being saved. \n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var WelcomeRoutineMaxDurationReached;
var _WelcomeResponse_allKeys;
var WelcomeRoutineMaxDuration;
var WelcomeRoutineComponents;
function WelcomeRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'WelcomeRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    WelcomeRoutineClock.reset();
    routineTimer.reset();
    WelcomeRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    WelcomeResponse.keys = undefined;
    WelcomeResponse.rt = undefined;
    _WelcomeResponse_allKeys = [];
    psychoJS.experiment.addData('WelcomeRoutine.started', globalClock.getTime());
    WelcomeRoutineMaxDuration = null
    // keep track of which components have finished
    WelcomeRoutineComponents = [];
    WelcomeRoutineComponents.push(WelcomeText);
    WelcomeRoutineComponents.push(WelcomeResponse);
    
    for (const thisComponent of WelcomeRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WelcomeRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'WelcomeRoutine' ---
    // get current time
    t = WelcomeRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *WelcomeText* updates
    if (t >= 0.0 && WelcomeText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      WelcomeText.tStart = t;  // (not accounting for frame time here)
      WelcomeText.frameNStart = frameN;  // exact frame index
      
      WelcomeText.setAutoDraw(true);
    }
    
    
    // *WelcomeResponse* updates
    if (t >= 0.0 && WelcomeResponse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      WelcomeResponse.tStart = t;  // (not accounting for frame time here)
      WelcomeResponse.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { WelcomeResponse.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { WelcomeResponse.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { WelcomeResponse.clearEvents(); });
    }
    
    if (WelcomeResponse.status === PsychoJS.Status.STARTED) {
      let theseKeys = WelcomeResponse.getKeys({keyList: ['space'], waitRelease: false});
      _WelcomeResponse_allKeys = _WelcomeResponse_allKeys.concat(theseKeys);
      if (_WelcomeResponse_allKeys.length > 0) {
        WelcomeResponse.keys = _WelcomeResponse_allKeys[_WelcomeResponse_allKeys.length - 1].name;  // just the last key pressed
        WelcomeResponse.rt = _WelcomeResponse_allKeys[_WelcomeResponse_allKeys.length - 1].rt;
        WelcomeResponse.duration = _WelcomeResponse_allKeys[_WelcomeResponse_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WelcomeRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'WelcomeRoutine' ---
    for (const thisComponent of WelcomeRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('WelcomeRoutine.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(WelcomeResponse.corr, level);
    }
    psychoJS.experiment.addData('WelcomeResponse.keys', WelcomeResponse.keys);
    if (typeof WelcomeResponse.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('WelcomeResponse.rt', WelcomeResponse.rt);
        psychoJS.experiment.addData('WelcomeResponse.duration', WelcomeResponse.duration);
        routineTimer.reset();
        }
    
    WelcomeResponse.stop();
    // the Routine "WelcomeRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditionss.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(TrialRoutineRoutineBegin(snapshot));
      trialsLoopScheduler.add(TrialRoutineRoutineEachFrame());
      trialsLoopScheduler.add(TrialRoutineRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var TrialRoutineMaxDurationReached;
var _response_allKeys;
var TrialRoutineMaxDuration;
var TrialRoutineComponents;
function TrialRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TrialRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    TrialRoutineClock.reset();
    routineTimer.reset();
    TrialRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // --- In Begin Routine ---
    
    // Get the data for the current trial
    const loop = trials;
    const currentTrial = loop.getSnapshot().getCurrentTrial();
    
    // Store the word in a variable that we can access on each frame
    this.currentWord = 'Error: word_stimulus not found'; // Default error message
    if (currentTrial && currentTrial.hasOwnProperty('word_stimulus')) {
        this.currentWord = currentTrial.word_stimulus;
    }
    
    // A flag to make sure we only show the word once per trial
    this.wordHasBeenShown = false;
    trial_text.setText(word_stimulus);
    response.keys = undefined;
    response.rt = undefined;
    _response_allKeys = [];
    psychoJS.experiment.addData('TrialRoutine.started', globalClock.getTime());
    TrialRoutineMaxDuration = null
    // keep track of which components have finished
    TrialRoutineComponents = [];
    TrialRoutineComponents.push(text);
    TrialRoutineComponents.push(trial_text);
    TrialRoutineComponents.push(response);
    
    for (const thisComponent of TrialRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function TrialRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TrialRoutine' ---
    // get current time
    t = TrialRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    // --- In Each Frame ---
    
    // 't' is the time in seconds since the start of the trial
    // This code checks if the time is past 0.5s AND if we haven't shown the word yet
    if (t >= 0.5 && !this.wordHasBeenShown) {
        
        // Find our custom text element
        const devanagariText = document.getElementById('devanagari_text_stimulus');
        
        // Put the word in the element and show it
        devanagariText.innerHTML = this.currentWord;
        devanagariText.style.display = 'block';
        
        // Set the flag to true so this code doesn't run again on the next frame
        this.wordHasBeenShown = true;
    }
    
    // *trial_text* updates
    if (t >= 0.5 && trial_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_text.tStart = t;  // (not accounting for frame time here)
      trial_text.frameNStart = frameN;  // exact frame index
      
      trial_text.setAutoDraw(true);
    }
    
    
    // *response* updates
    if (t >= 0.0 && response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response.tStart = t;  // (not accounting for frame time here)
      response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response.clearEvents(); });
    }
    
    if (response.status === PsychoJS.Status.STARTED) {
      let theseKeys = response.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _response_allKeys = _response_allKeys.concat(theseKeys);
      if (_response_allKeys.length > 0) {
        response.keys = _response_allKeys[_response_allKeys.length - 1].name;  // just the last key pressed
        response.rt = _response_allKeys[_response_allKeys.length - 1].rt;
        response.duration = _response_allKeys[_response_allKeys.length - 1].duration;
        // was this correct?
        if (response.keys == correct_key) {
            response.corr = 1;
        } else {
            response.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TrialRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TrialRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TrialRoutine' ---
    for (const thisComponent of TrialRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('TrialRoutine.stopped', globalClock.getTime());
    // --- In End Routine (JS) ---
    
    // Find our custom text element
    let devanagariText = document.getElementById('devanagari_text_stimulus');
    
    // Hide the text to get ready for the next trial
    devanagariText.style.display = 'none';
    // was no response the correct answer?!
    if (response.keys === undefined) {
      if (['None','none',undefined].includes(correct_key)) {
         response.corr = 1;  // correct non-response
      } else {
         response.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(response.corr, level);
    }
    psychoJS.experiment.addData('response.keys', response.keys);
    psychoJS.experiment.addData('response.corr', response.corr);
    if (typeof response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response.rt', response.rt);
        psychoJS.experiment.addData('response.duration', response.duration);
        routineTimer.reset();
        }
    
    response.stop();
    // the Routine "TrialRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exitRoutineMaxDurationReached;
var exitRoutineMaxDuration;
var exitRoutineComponents;
function exitRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exitRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exitRoutineClock.reset();
    routineTimer.reset();
    exitRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
    
    // Generate filename for results. A random string is added at the end to ensure the filename is always unique.
    let randomString = Math.random().toString(36).substring(2, 11);
    let filename = psychoJS.experiment.experimentName + '_' + psychoJS.experiment.datetime + '_' + randomString + '.csv';
    
    // Extract the data object from the experiment trials
    let dataObj = psychoJS.experiment._trialsData;
    
    // Convert the array of data objects into a CSV formatted string.
    let csvContent = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
    }).join('\n');
    
    // ★ FIX FOR DEVANAGARI CHARACTERS ★
    // Add the UTF-8 Byte Order Mark (BOM). This is an invisible marker that tells
    // programs like Excel to read the file with the correct encoding for special characters.
    let data = '\uFEFF' + csvContent;
    
    // Announce that data saving is starting in the browser's developer console.
    console.log('Saving data with filename: ' + filename);
    
    // Send the data to the OSF via DataPipe using the fetch API.
    fetch('https://pipe.jspsych.org/api/data/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
        },
        body: JSON.stringify({
            experimentID: '9yHdQZIMQHkr', // ★ IMPORTANT: Replace this with your actual DataPipe Experiment ID ★
            filename: filename,
            data: data,
        }),
    }).then(response => {
        if (!response.ok) {
            // If the server response is not OK, log the error details
            console.error('DataPipe server returned an error.');
            return response.json().then(errorData => Promise.reject(errorData));
        }
        return response.json();
    }).then(data => {
        // Log the successful server response to the console.
        console.log('Data saved successfully:', data);
        // Force the experiment to end after the data has been sent.
        quitPsychoJS();
    }).catch(error => {
        // Catch any errors during the fetch process and log them.
        console.error('Failed to save data:', error);
        // Even if saving fails, end the experiment so the user isn't stuck.
        quitPsychoJS();
    });
    
    psychoJS.experiment.addData('exitRoutine.started', globalClock.getTime());
    exitRoutineMaxDuration = null
    // keep track of which components have finished
    exitRoutineComponents = [];
    exitRoutineComponents.push(text_2);
    
    for (const thisComponent of exitRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exitRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exitRoutine' ---
    // get current time
    t = exitRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exitRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exitRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exitRoutine' ---
    for (const thisComponent of exitRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exitRoutine.stopped', globalClock.getTime());
    // the Routine "exitRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
