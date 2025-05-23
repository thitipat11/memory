/***************** 
 * Untitled *
 *****************/


// store info about the experiment session:
let expName = 'untitled';  // from the Builder filename that created this script
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
  color: new util.Color([0,0,0]),
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
flowScheduler.add(beforeplayRoutineBegin());
flowScheduler.add(beforeplayRoutineEachFrame());
flowScheduler.add(beforeplayRoutineEnd());
const loopmemoryLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loopmemoryLoopBegin(loopmemoryLoopScheduler));
flowScheduler.add(loopmemoryLoopScheduler);
flowScheduler.add(loopmemoryLoopEnd);




flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'memory_stim.xlsx', 'path': 'memory_stim.xlsx'},
    {'name': 'image/memory1.png', 'path': 'image/memory1.png'},
    {'name': 'image/memory1a.png', 'path': 'image/memory1a.png'},
    {'name': 'image/memory2.png', 'path': 'image/memory2.png'},
    {'name': 'image/memory2a.png', 'path': 'image/memory2a.png'},
    {'name': 'image/memory3.png', 'path': 'image/memory3.png'},
    {'name': 'image/memory3a.png', 'path': 'image/memory3a.png'},
    {'name': 'image/memory4.png', 'path': 'image/memory4.png'},
    {'name': 'image/memory4a.png', 'path': 'image/memory4a.png'},
    {'name': 'image/memory5.png', 'path': 'image/memory5.png'},
    {'name': 'image/memory5a.png', 'path': 'image/memory5a.png'},
    {'name': 'image/memory6.png', 'path': 'image/memory6.png'},
    {'name': 'image/memory6a.png', 'path': 'image/memory6a.png'},
    {'name': 'image/memory7.png', 'path': 'image/memory7.png'},
    {'name': 'image/memory7a.png', 'path': 'image/memory7a.png'},
    {'name': 'image/memory8.png', 'path': 'image/memory8.png'},
    {'name': 'image/memory8a.png', 'path': 'image/memory8a.png'},
    {'name': 'image/memory9.png', 'path': 'image/memory9.png'},
    {'name': 'image/memory9a.png', 'path': 'image/memory9a.png'},
    {'name': 'image/memory10.png', 'path': 'image/memory10.png'},
    {'name': 'image/memory10a.png', 'path': 'image/memory10a.png'},
    {'name': 'image/memory11.png', 'path': 'image/memory11.png'},
    {'name': 'image/memory11a.png', 'path': 'image/memory11a.png'},
    {'name': 'image/memory12.png', 'path': 'image/memory12.png'},
    {'name': 'image/memory12a.png', 'path': 'image/memory12a.png'},
    {'name': 'image/memory13.png', 'path': 'image/memory13.png'},
    {'name': 'image/memory13a.png', 'path': 'image/memory13a.png'},
    {'name': 'image/memory14.png', 'path': 'image/memory14.png'},
    {'name': 'image/memory14a.png', 'path': 'image/memory14a.png'},
    {'name': 'image/memory15.png', 'path': 'image/memory15.png'},
    {'name': 'image/memory15a.png', 'path': 'image/memory15a.png'},
    {'name': 'image/memory16.png', 'path': 'image/memory16.png'},
    {'name': 'image/memory16a.png', 'path': 'image/memory16a.png'},
    {'name': 'image/memory17.png', 'path': 'image/memory17.png'},
    {'name': 'image/memory17a.png', 'path': 'image/memory17a.png'},
    {'name': 'image/memory18.png', 'path': 'image/memory18.png'},
    {'name': 'image/memory18a.png', 'path': 'image/memory18a.png'},
    {'name': 'image/memory19.png', 'path': 'image/memory19.png'},
    {'name': 'image/memory19a.png', 'path': 'image/memory19a.png'},
    {'name': 'image/memory20.png', 'path': 'image/memory20.png'},
    {'name': 'image/memory20a.png', 'path': 'image/memory20a.png'},
    {'name': 'image/memory21.png', 'path': 'image/memory21.png'},
    {'name': 'image/memory21a.png', 'path': 'image/memory21a.png'},
    {'name': 'image/memory22.png', 'path': 'image/memory22.png'},
    {'name': 'image/memory22a.png', 'path': 'image/memory22a.png'},
    {'name': 'image/memory23.png', 'path': 'image/memory23.png'},
    {'name': 'image/memory23a.png', 'path': 'image/memory23a.png'},
    {'name': 'image/memory24.png', 'path': 'image/memory24.png'},
    {'name': 'image/memory24a.png', 'path': 'image/memory24a.png'},
    {'name': 'image/memory25.png', 'path': 'image/memory25.png'},
    {'name': 'image/memory25a.png', 'path': 'image/memory25a.png'},
    {'name': 'image/memory26.png', 'path': 'image/memory26.png'},
    {'name': 'image/memory26a.png', 'path': 'image/memory26a.png'},
    {'name': 'image/memory27.png', 'path': 'image/memory27.png'},
    {'name': 'image/memory27a.png', 'path': 'image/memory27a.png'},
    {'name': 'image/memory28.png', 'path': 'image/memory28.png'},
    {'name': 'image/memory28a.png', 'path': 'image/memory28a.png'},
    {'name': 'image/memory29.png', 'path': 'image/memory29.png'},
    {'name': 'image/memory29a.png', 'path': 'image/memory29a.png'},
    {'name': 'image/memory30.png', 'path': 'image/memory30.png'},
    {'name': 'image/memory30a.png', 'path': 'image/memory30a.png'},
    {'name': 'image/kumnum.png', 'path': 'image/kumnum.png'},
    {'name': 'image/Screenshot (174).png', 'path': 'image/Screenshot (174).png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.5';
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


var beforeplayClock;
var imageBeforeplay;
var keyBeforeplay;
var fixationClock;
var imagefixation;
var trialmemoryClock;
var image_2;
var anwerClock;
var imaganswer;
var key_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "beforeplay"
  beforeplayClock = new util.Clock();
  imageBeforeplay = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imageBeforeplay', units : undefined, 
    image : 'image/kumnum.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.78, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  keyBeforeplay = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  imagefixation = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imagefixation', units : undefined, 
    image : 'image/Screenshot (174).png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.78, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "trialmemory"
  trialmemoryClock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.78, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "anwer"
  anwerClock = new util.Clock();
  imaganswer = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imaganswer', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.78, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var beforeplayMaxDurationReached;
var _keyBeforeplay_allKeys;
var beforeplayMaxDuration;
var beforeplayComponents;
function beforeplayRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'beforeplay' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    beforeplayClock.reset();
    routineTimer.reset();
    beforeplayMaxDurationReached = false;
    // update component parameters for each repeat
    keyBeforeplay.keys = undefined;
    keyBeforeplay.rt = undefined;
    _keyBeforeplay_allKeys = [];
    psychoJS.experiment.addData('beforeplay.started', globalClock.getTime());
    beforeplayMaxDuration = null
    // keep track of which components have finished
    beforeplayComponents = [];
    beforeplayComponents.push(imageBeforeplay);
    beforeplayComponents.push(keyBeforeplay);
    
    beforeplayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function beforeplayRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'beforeplay' ---
    // get current time
    t = beforeplayClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *imageBeforeplay* updates
    if (t >= 0.0 && imageBeforeplay.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      imageBeforeplay.tStart = t;  // (not accounting for frame time here)
      imageBeforeplay.frameNStart = frameN;  // exact frame index
      
      imageBeforeplay.setAutoDraw(true);
    }
    
    
    // *keyBeforeplay* updates
    if (t >= 0.0 && keyBeforeplay.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyBeforeplay.tStart = t;  // (not accounting for frame time here)
      keyBeforeplay.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyBeforeplay.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyBeforeplay.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyBeforeplay.clearEvents(); });
    }
    
    if (keyBeforeplay.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyBeforeplay.getKeys({keyList: ['space'], waitRelease: false});
      _keyBeforeplay_allKeys = _keyBeforeplay_allKeys.concat(theseKeys);
      if (_keyBeforeplay_allKeys.length > 0) {
        keyBeforeplay.keys = _keyBeforeplay_allKeys[_keyBeforeplay_allKeys.length - 1].name;  // just the last key pressed
        keyBeforeplay.rt = _keyBeforeplay_allKeys[_keyBeforeplay_allKeys.length - 1].rt;
        keyBeforeplay.duration = _keyBeforeplay_allKeys[_keyBeforeplay_allKeys.length - 1].duration;
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
    beforeplayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function beforeplayRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'beforeplay' ---
    beforeplayComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('beforeplay.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(keyBeforeplay.corr, level);
    }
    psychoJS.experiment.addData('keyBeforeplay.keys', keyBeforeplay.keys);
    if (typeof keyBeforeplay.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyBeforeplay.rt', keyBeforeplay.rt);
        psychoJS.experiment.addData('keyBeforeplay.duration', keyBeforeplay.duration);
        routineTimer.reset();
        }
    
    keyBeforeplay.stop();
    // the Routine "beforeplay" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var loopmemory;
function loopmemoryLoopBegin(loopmemoryLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loopmemory = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'memory_stim.xlsx',
      seed: undefined, name: 'loopmemory'
    });
    psychoJS.experiment.addLoop(loopmemory); // add the loop to the experiment
    currentLoop = loopmemory;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    loopmemory.forEach(function() {
      snapshot = loopmemory.getSnapshot();
    
      loopmemoryLoopScheduler.add(importConditions(snapshot));
      loopmemoryLoopScheduler.add(fixationRoutineBegin(snapshot));
      loopmemoryLoopScheduler.add(fixationRoutineEachFrame());
      loopmemoryLoopScheduler.add(fixationRoutineEnd(snapshot));
      loopmemoryLoopScheduler.add(trialmemoryRoutineBegin(snapshot));
      loopmemoryLoopScheduler.add(trialmemoryRoutineEachFrame());
      loopmemoryLoopScheduler.add(trialmemoryRoutineEnd(snapshot));
      loopmemoryLoopScheduler.add(anwerRoutineBegin(snapshot));
      loopmemoryLoopScheduler.add(anwerRoutineEachFrame());
      loopmemoryLoopScheduler.add(anwerRoutineEnd(snapshot));
      loopmemoryLoopScheduler.add(loopmemoryLoopEndIteration(loopmemoryLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function loopmemoryLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loopmemory);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loopmemoryLoopEndIteration(scheduler, snapshot) {
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


var fixationMaxDurationReached;
var fixationMaxDuration;
var fixationComponents;
function fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    fixationClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    fixationMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('fixation.started', globalClock.getTime());
    fixationMaxDuration = null
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(imagefixation);
    
    fixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixation' ---
    // get current time
    t = fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *imagefixation* updates
    if (t >= 0.0 && imagefixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      imagefixation.tStart = t;  // (not accounting for frame time here)
      imagefixation.frameNStart = frameN;  // exact frame index
      
      imagefixation.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (imagefixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      imagefixation.setAutoDraw(false);
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
    fixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixation' ---
    fixationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('fixation.stopped', globalClock.getTime());
    if (fixationMaxDurationReached) {
        fixationClock.add(fixationMaxDuration);
    } else {
        fixationClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialmemoryMaxDurationReached;
var trialmemoryMaxDuration;
var trialmemoryComponents;
function trialmemoryRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trialmemory' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trialmemoryClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    trialmemoryMaxDurationReached = false;
    // update component parameters for each repeat
    image_2.setImage(Memory_image);
    psychoJS.experiment.addData('trialmemory.started', globalClock.getTime());
    trialmemoryMaxDuration = null
    // keep track of which components have finished
    trialmemoryComponents = [];
    trialmemoryComponents.push(image_2);
    
    trialmemoryComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialmemoryRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trialmemory' ---
    // get current time
    t = trialmemoryClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_2.setAutoDraw(false);
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
    trialmemoryComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialmemoryRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trialmemory' ---
    trialmemoryComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trialmemory.stopped', globalClock.getTime());
    if (trialmemoryMaxDurationReached) {
        trialmemoryClock.add(trialmemoryMaxDuration);
    } else {
        trialmemoryClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var anwerMaxDurationReached;
var _key_resp_allKeys;
var anwerMaxDuration;
var anwerComponents;
function anwerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'anwer' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    anwerClock.reset();
    routineTimer.reset();
    anwerMaxDurationReached = false;
    // update component parameters for each repeat
    imaganswer.setImage(answer_image);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('anwer.started', globalClock.getTime());
    anwerMaxDuration = null
    // keep track of which components have finished
    anwerComponents = [];
    anwerComponents.push(imaganswer);
    anwerComponents.push(key_resp);
    
    anwerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function anwerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'anwer' ---
    // get current time
    t = anwerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *imaganswer* updates
    if (t >= 0.0 && imaganswer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      imaganswer.tStart = t;  // (not accounting for frame time here)
      imaganswer.frameNStart = frameN;  // exact frame index
      
      imaganswer.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp.keys == answer_key) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
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
    anwerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function anwerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'anwer' ---
    anwerComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('anwer.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(answer_key)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "anwer" was not non-slip safe, so reset the non-slip timer
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
