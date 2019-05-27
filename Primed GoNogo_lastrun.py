#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v3.0.4),
    on May 27, 2019, at 21:38
If you publish work using this script please cite the PsychoPy publications:
    Peirce, JW (2007) PsychoPy - Psychophysics software in Python.
        Journal of Neuroscience Methods, 162(1-2), 8-13.
    Peirce, JW (2009) Generating stimuli for neuroscience using PsychoPy.
        Frontiers in Neuroinformatics, 2:10. doi: 10.3389/neuro.11.010.2008
"""

from __future__ import absolute_import, division

import psychopy
psychopy.useVersion('latest')

from psychopy import locale_setup, sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)
import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding


# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '3.0.4'
expName = 'Primed GoNogo'  # from the Builder filename that created this script
expInfo = {'*Participant ID ': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='G:\\uni\\PhD\\Tasks\\Primed GoNogo with Feedback Pavlovia\\Primed GoNogo_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[1366, 768], fullscr=True, screen=0,
    allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True)
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Initialize components for Routine "Intructions"
IntructionsClock = core.Clock()
instruction = visual.TextStim(win=win, name='instruction',
    text='Practice Sessions:\n\nYou should respond only when you see the triangle.\n\nBefore the triangle appears you will also see:\nA   circle --> press    C    after the triangle.\n\nA   square --> press    M    after the triangle. \n\n\n\nPlease be as fast and accurate as you can. \n\nPress any key to continue onto the next instruction screen.',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "Prac1_Instr"
Prac1_InstrClock = core.Clock()
prac1_instr_t = visual.TextStim(win=win, name='prac1_instr_t',
    text='Practice session 1. \nPlease follow instructions below. \n\nIf you see a circle: \nalways respond with the letter  C. \n\nIf you see a square:\nrespond with the letter  M  only if the triangle is in the middle. \n\nDO NOT press anything if the triangle is positioned on the right.\n\nPress any key to begin.\n',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "prac1_trial"
prac1_trialClock = core.Clock()
from numpy.random import random




prac_fix = visual.TextStim(win=win, name='prac_fix',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.07, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
prac_im1 = visual.ImageStim(
    win=win, name='prac_im1',
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
prax_fix2 = visual.TextStim(win=win, name='prax_fix2',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.07, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
image_2 = visual.ImageStim(
    win=win, name='image_2',
    image='triangle.jpg', mask=None,
    ori=0, pos=[0,0], size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-4.0)

# Initialize components for Routine "prac1_feedback"
prac1_feedbackClock = core.Clock()

prac_feed = visual.TextStim(win=win, name='prac_feed',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "Prac2_Instr"
Prac2_InstrClock = core.Clock()
prac_instr_t2 = visual.TextStim(win=win, name='prac_instr_t2',
    text='Now the rules change - session 2. \n\nIf you see a circle: \nrespond with the letter  C   only if the triangle is in the middle. \n\nDo not press anything if the triangle is positioned on the left.\n \n\nIf you see a square:\nAlways respond with the letter  M   \n\nPress any key to begin.',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "prac2_trial"
prac2_trialClock = core.Clock()

prac2_fix = visual.TextStim(win=win, name='prac2_fix',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.07, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
prac_im = visual.ImageStim(
    win=win, name='prac_im',
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
prac2_fix2 = visual.TextStim(win=win, name='prac2_fix2',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.07, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
prac_img2 = visual.ImageStim(
    win=win, name='prac_img2',
    image='triangle.jpg', mask=None,
    ori=0, pos=[0,0], size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-4.0)

# Initialize components for Routine "prac2_feedback"
prac2_feedbackClock = core.Clock()

prac2_feed = visual.TextStim(win=win, name='prac2_feed',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "Prac_Over"
Prac_OverClock = core.Clock()
prac_over = visual.TextStim(win=win, name='prac_over',
    text='This is the end of the practice session. \n\nYou will now start the main experiment. \n\nPlease pay attention every time the instruction screen\nshows up. This means that the rules are changing. \n\nYou can take a short break when the instruction screen \nshows up before continuing with the experiment. \n\nThe blocks will now be much longer \nand there will be 6 of them.',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "SpecInstructions"
SpecInstructionsClock = core.Clock()
instrSR = visual.TextStim(win=win, name='instrSR',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "trial"
trialClock = core.Clock()

fixation1 = visual.TextStim(win=win, name='fixation1',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.07, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
image = visual.ImageStim(
    win=win, name='image',
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
fixation2 = visual.TextStim(win=win, name='fixation2',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.07, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
triangle = visual.ImageStim(
    win=win, name='triangle',
    image='triangle.jpg', mask=None,
    ori=0, pos=[0,0], size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-5.0)

# Initialize components for Routine "feedback"
feedbackClock = core.Clock()

feedbackText = visual.TextStim(win=win, name='feedbackText',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "thanks"
thanksClock = core.Clock()
thankyou = visual.TextStim(win=win, name='thankyou',
    text='Thank you!\n\nThis is the end of the task.\n\nPress   Esc   to exit. \nYou can then close this window.',
    font='Arial',
    pos=(0, 0), height=0.08, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Intructions"-------
t = 0
IntructionsClock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
ready = event.BuilderKeyResponse()
# keep track of which components have finished
IntructionsComponents = [instruction, ready]
for thisComponent in IntructionsComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "Intructions"-------
while continueRoutine:
    # get current time
    t = IntructionsClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instruction* updates
    if t >= 0.0 and instruction.status == NOT_STARTED:
        # keep track of start time/frame for later
        instruction.tStart = t
        instruction.frameNStart = frameN  # exact frame index
        instruction.setAutoDraw(True)
    
    # *ready* updates
    if t >= 0.0 and ready.status == NOT_STARTED:
        # keep track of start time/frame for later
        ready.tStart = t
        ready.frameNStart = frameN  # exact frame index
        ready.status = STARTED
        # keyboard checking is just starting
        event.clearEvents(eventType='keyboard')
    if ready.status == STARTED:
        theseKeys = event.getKeys()
        
        # check for quit:
        if "escape" in theseKeys:
            endExpNow = True
        if len(theseKeys) > 0:  # at least one key was pressed
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in IntructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Intructions"-------
for thisComponent in IntructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Intructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Prac1_Instr"-------
t = 0
Prac1_InstrClock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
instr_resp = event.BuilderKeyResponse()
# keep track of which components have finished
Prac1_InstrComponents = [prac1_instr_t, instr_resp]
for thisComponent in Prac1_InstrComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "Prac1_Instr"-------
while continueRoutine:
    # get current time
    t = Prac1_InstrClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *prac1_instr_t* updates
    if t >= 0.0 and prac1_instr_t.status == NOT_STARTED:
        # keep track of start time/frame for later
        prac1_instr_t.tStart = t
        prac1_instr_t.frameNStart = frameN  # exact frame index
        prac1_instr_t.setAutoDraw(True)
    
    # *instr_resp* updates
    if t >= 0.0 and instr_resp.status == NOT_STARTED:
        # keep track of start time/frame for later
        instr_resp.tStart = t
        instr_resp.frameNStart = frameN  # exact frame index
        instr_resp.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(instr_resp.clock.reset)  # t=0 on next screen flip
        event.clearEvents(eventType='keyboard')
    if instr_resp.status == STARTED:
        theseKeys = event.getKeys()
        
        # check for quit:
        if "escape" in theseKeys:
            endExpNow = True
        if len(theseKeys) > 0:  # at least one key was pressed
            if instr_resp.keys == []:  # then this was the first keypress
                instr_resp.keys = theseKeys[0]  # just the first key pressed
                instr_resp.rt = instr_resp.clock.getTime()
                # a response ends the routine
                continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Prac1_InstrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Prac1_Instr"-------
for thisComponent in Prac1_InstrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if instr_resp.keys in ['', [], None]:  # No response was made
    instr_resp.keys=None
thisExp.addData('instr_resp.keys',instr_resp.keys)
if instr_resp.keys != None:  # we had a response
    thisExp.addData('instr_resp.rt', instr_resp.rt)
thisExp.nextEntry()
# the Routine "Prac1_Instr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
prac_1 = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('pconditions1.csv'),
    seed=None, name='prac_1')
thisExp.addLoop(prac_1)  # add the loop to the experiment
thisPrac_1 = prac_1.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPrac_1.rgb)
if thisPrac_1 != None:
    for paramName in thisPrac_1:
        exec('{} = thisPrac_1[paramName]'.format(paramName))

for thisPrac_1 in prac_1:
    currentLoop = prac_1
    # abbreviate parameter names if possible (e.g. rgb = thisPrac_1.rgb)
    if thisPrac_1 != None:
        for paramName in thisPrac_1:
            exec('{} = thisPrac_1[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "prac1_trial"-------
    t = 0
    prac1_trialClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    # update component parameters for each repeat
    jitter = random() * (1.0 - 0.5) + 0.5
    jitter = round(jitter, 1) # round to 1 decimal place
    
    
    prac_im1.setImage(imageFile)
    image_2.setPos([posX, posY])
    prac_resp = event.BuilderKeyResponse()
    # keep track of which components have finished
    prac1_trialComponents = [prac_fix, prac_im1, prax_fix2, image_2, prac_resp]
    for thisComponent in prac1_trialComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "prac1_trial"-------
    while continueRoutine:
        # get current time
        t = prac1_trialClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        
        # *prac_fix* updates
        if t >= 0.0 and prac_fix.status == NOT_STARTED:
            # keep track of start time/frame for later
            prac_fix.tStart = t
            prac_fix.frameNStart = frameN  # exact frame index
            prac_fix.setAutoDraw(True)
        frameRemains = 0.0 + jitter- win.monitorFramePeriod * 0.75  # most of one frame period left
        if prac_fix.status == STARTED and t >= frameRemains:
            prac_fix.setAutoDraw(False)
        
        # *prac_im1* updates
        if t >= jitter and prac_im1.status == NOT_STARTED:
            # keep track of start time/frame for later
            prac_im1.tStart = t
            prac_im1.frameNStart = frameN  # exact frame index
            prac_im1.setAutoDraw(True)
        frameRemains = jitter + 0.1- win.monitorFramePeriod * 0.75  # most of one frame period left
        if prac_im1.status == STARTED and t >= frameRemains:
            prac_im1.setAutoDraw(False)
        
        # *prax_fix2* updates
        if t >= jitter+0.1 and prax_fix2.status == NOT_STARTED:
            # keep track of start time/frame for later
            prax_fix2.tStart = t
            prax_fix2.frameNStart = frameN  # exact frame index
            prax_fix2.setAutoDraw(True)
        frameRemains = jitter+0.1 + 0.9- win.monitorFramePeriod * 0.75  # most of one frame period left
        if prax_fix2.status == STARTED and t >= frameRemains:
            prax_fix2.setAutoDraw(False)
        
        # *image_2* updates
        if t >= jitter+1.0 and image_2.status == NOT_STARTED:
            # keep track of start time/frame for later
            image_2.tStart = t
            image_2.frameNStart = frameN  # exact frame index
            image_2.setAutoDraw(True)
        frameRemains = jitter+1.0 + 0.1- win.monitorFramePeriod * 0.75  # most of one frame period left
        if image_2.status == STARTED and t >= frameRemains:
            image_2.setAutoDraw(False)
        
        # *prac_resp* updates
        if t >= jitter+1.0 and prac_resp.status == NOT_STARTED:
            # keep track of start time/frame for later
            prac_resp.tStart = t
            prac_resp.frameNStart = frameN  # exact frame index
            prac_resp.status = STARTED
            # keyboard checking is just starting
            win.callOnFlip(prac_resp.clock.reset)  # t=0 on next screen flip
            event.clearEvents(eventType='keyboard')
        frameRemains = jitter+1.0 + 0.6- win.monitorFramePeriod * 0.75  # most of one frame period left
        if prac_resp.status == STARTED and t >= frameRemains:
            prac_resp.status = FINISHED
        if prac_resp.status == STARTED:
            theseKeys = event.getKeys(keyList=['c', 'm'])
            
            # check for quit:
            if "escape" in theseKeys:
                endExpNow = True
            if len(theseKeys) > 0:  # at least one key was pressed
                if prac_resp.keys == []:  # then this was the first keypress
                    prac_resp.keys = theseKeys[0]  # just the first key pressed
                    prac_resp.rt = prac_resp.clock.getTime()
                    # was this 'correct'?
                    if (prac_resp.keys == str(corrAns)) or (prac_resp.keys == corrAns):
                        prac_resp.corr = 1
                    else:
                        prac_resp.corr = 0
        
        # check for quit (typically the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in prac1_trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "prac1_trial"-------
    for thisComponent in prac1_trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    prac_1.addData('jitter', jitter)
    
    # check responses
    if prac_resp.keys in ['', [], None]:  # No response was made
        prac_resp.keys=None
        # was no response the correct answer?!
        if str(corrAns).lower() == 'none':
           prac_resp.corr = 1;  # correct non-response
        else:
           prac_resp.corr = 0;  # failed to respond (incorrectly)
    # store data for prac_1 (TrialHandler)
    prac_1.addData('prac_resp.keys',prac_resp.keys)
    prac_1.addData('prac_resp.corr', prac_resp.corr)
    if prac_resp.keys != None:  # we had a response
        prac_1.addData('prac_resp.rt', prac_resp.rt)
    # the Routine "prac1_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "prac1_feedback"-------
    t = 0
    prac1_feedbackClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    routineTimer.add(0.600000)
    # update component parameters for each repeat
    if prac_resp.corr:
        msg='Correct!'
        msgColor='green'
    else:
        msg='Incorrect!'
        msgColor='red'
    prac_feed.setColor(msgColor, colorSpace='rgb')
    prac_feed.setText(msg)
    # keep track of which components have finished
    prac1_feedbackComponents = [prac_feed]
    for thisComponent in prac1_feedbackComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "prac1_feedback"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = prac1_feedbackClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        
        # *prac_feed* updates
        if t >= 0.0 and prac_feed.status == NOT_STARTED:
            # keep track of start time/frame for later
            prac_feed.tStart = t
            prac_feed.frameNStart = frameN  # exact frame index
            prac_feed.setAutoDraw(True)
        frameRemains = 0.0 + 0.6- win.monitorFramePeriod * 0.75  # most of one frame period left
        if prac_feed.status == STARTED and t >= frameRemains:
            prac_feed.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in prac1_feedbackComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "prac1_feedback"-------
    for thisComponent in prac1_feedbackComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    thisExp.nextEntry()
    
# completed 1 repeats of 'prac_1'


# ------Prepare to start Routine "Prac2_Instr"-------
t = 0
Prac2_InstrClock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
instr_resp2 = event.BuilderKeyResponse()
# keep track of which components have finished
Prac2_InstrComponents = [prac_instr_t2, instr_resp2]
for thisComponent in Prac2_InstrComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "Prac2_Instr"-------
while continueRoutine:
    # get current time
    t = Prac2_InstrClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *prac_instr_t2* updates
    if t >= 0.0 and prac_instr_t2.status == NOT_STARTED:
        # keep track of start time/frame for later
        prac_instr_t2.tStart = t
        prac_instr_t2.frameNStart = frameN  # exact frame index
        prac_instr_t2.setAutoDraw(True)
    
    # *instr_resp2* updates
    if t >= 0.0 and instr_resp2.status == NOT_STARTED:
        # keep track of start time/frame for later
        instr_resp2.tStart = t
        instr_resp2.frameNStart = frameN  # exact frame index
        instr_resp2.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(instr_resp2.clock.reset)  # t=0 on next screen flip
        event.clearEvents(eventType='keyboard')
    if instr_resp2.status == STARTED:
        theseKeys = event.getKeys()
        
        # check for quit:
        if "escape" in theseKeys:
            endExpNow = True
        if len(theseKeys) > 0:  # at least one key was pressed
            if instr_resp2.keys == []:  # then this was the first keypress
                instr_resp2.keys = theseKeys[0]  # just the first key pressed
                instr_resp2.rt = instr_resp2.clock.getTime()
                # a response ends the routine
                continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Prac2_InstrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Prac2_Instr"-------
for thisComponent in Prac2_InstrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if instr_resp2.keys in ['', [], None]:  # No response was made
    instr_resp2.keys=None
thisExp.addData('instr_resp2.keys',instr_resp2.keys)
if instr_resp2.keys != None:  # we had a response
    thisExp.addData('instr_resp2.rt', instr_resp2.rt)
thisExp.nextEntry()
# the Routine "Prac2_Instr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
prac_2 = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('pconditions2.csv'),
    seed=None, name='prac_2')
thisExp.addLoop(prac_2)  # add the loop to the experiment
thisPrac_2 = prac_2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPrac_2.rgb)
if thisPrac_2 != None:
    for paramName in thisPrac_2:
        exec('{} = thisPrac_2[paramName]'.format(paramName))

for thisPrac_2 in prac_2:
    currentLoop = prac_2
    # abbreviate parameter names if possible (e.g. rgb = thisPrac_2.rgb)
    if thisPrac_2 != None:
        for paramName in thisPrac_2:
            exec('{} = thisPrac_2[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "prac2_trial"-------
    t = 0
    prac2_trialClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    # update component parameters for each repeat
    jitter = random() * (1.0 - 0.5) + 0.5
    jitter = round(jitter, 1) # round to 1 decimal place
    
    
    
    prac_im.setImage(imageFile)
    prac_img2.setPos([posX, posY])
    prac_resp2 = event.BuilderKeyResponse()
    # keep track of which components have finished
    prac2_trialComponents = [prac2_fix, prac_im, prac2_fix2, prac_img2, prac_resp2]
    for thisComponent in prac2_trialComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "prac2_trial"-------
    while continueRoutine:
        # get current time
        t = prac2_trialClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        
        # *prac2_fix* updates
        if t >= 0.0 and prac2_fix.status == NOT_STARTED:
            # keep track of start time/frame for later
            prac2_fix.tStart = t
            prac2_fix.frameNStart = frameN  # exact frame index
            prac2_fix.setAutoDraw(True)
        frameRemains = 0.0 + jitter- win.monitorFramePeriod * 0.75  # most of one frame period left
        if prac2_fix.status == STARTED and t >= frameRemains:
            prac2_fix.setAutoDraw(False)
        
        # *prac_im* updates
        if t >= jitter and prac_im.status == NOT_STARTED:
            # keep track of start time/frame for later
            prac_im.tStart = t
            prac_im.frameNStart = frameN  # exact frame index
            prac_im.setAutoDraw(True)
        frameRemains = jitter + 0.1- win.monitorFramePeriod * 0.75  # most of one frame period left
        if prac_im.status == STARTED and t >= frameRemains:
            prac_im.setAutoDraw(False)
        
        # *prac2_fix2* updates
        if t >= jitter+0.1 and prac2_fix2.status == NOT_STARTED:
            # keep track of start time/frame for later
            prac2_fix2.tStart = t
            prac2_fix2.frameNStart = frameN  # exact frame index
            prac2_fix2.setAutoDraw(True)
        frameRemains = jitter+0.1 + 0.9- win.monitorFramePeriod * 0.75  # most of one frame period left
        if prac2_fix2.status == STARTED and t >= frameRemains:
            prac2_fix2.setAutoDraw(False)
        
        # *prac_img2* updates
        if t >= jitter+1.0 and prac_img2.status == NOT_STARTED:
            # keep track of start time/frame for later
            prac_img2.tStart = t
            prac_img2.frameNStart = frameN  # exact frame index
            prac_img2.setAutoDraw(True)
        frameRemains = jitter+1.0 + 0.1- win.monitorFramePeriod * 0.75  # most of one frame period left
        if prac_img2.status == STARTED and t >= frameRemains:
            prac_img2.setAutoDraw(False)
        
        # *prac_resp2* updates
        if t >= jitter+1.0 and prac_resp2.status == NOT_STARTED:
            # keep track of start time/frame for later
            prac_resp2.tStart = t
            prac_resp2.frameNStart = frameN  # exact frame index
            prac_resp2.status = STARTED
            # keyboard checking is just starting
            win.callOnFlip(prac_resp2.clock.reset)  # t=0 on next screen flip
            event.clearEvents(eventType='keyboard')
        frameRemains = jitter+1.0 + 0.6- win.monitorFramePeriod * 0.75  # most of one frame period left
        if prac_resp2.status == STARTED and t >= frameRemains:
            prac_resp2.status = FINISHED
        if prac_resp2.status == STARTED:
            theseKeys = event.getKeys(keyList=['c', 'm'])
            
            # check for quit:
            if "escape" in theseKeys:
                endExpNow = True
            if len(theseKeys) > 0:  # at least one key was pressed
                if prac_resp2.keys == []:  # then this was the first keypress
                    prac_resp2.keys = theseKeys[0]  # just the first key pressed
                    prac_resp2.rt = prac_resp2.clock.getTime()
                    # was this 'correct'?
                    if (prac_resp2.keys == str(corrAns)) or (prac_resp2.keys == corrAns):
                        prac_resp2.corr = 1
                    else:
                        prac_resp2.corr = 0
        
        # check for quit (typically the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in prac2_trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "prac2_trial"-------
    for thisComponent in prac2_trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    prac_2.addData('jitter', jitter)
    
    # check responses
    if prac_resp2.keys in ['', [], None]:  # No response was made
        prac_resp2.keys=None
        # was no response the correct answer?!
        if str(corrAns).lower() == 'none':
           prac_resp2.corr = 1;  # correct non-response
        else:
           prac_resp2.corr = 0;  # failed to respond (incorrectly)
    # store data for prac_2 (TrialHandler)
    prac_2.addData('prac_resp2.keys',prac_resp2.keys)
    prac_2.addData('prac_resp2.corr', prac_resp2.corr)
    if prac_resp2.keys != None:  # we had a response
        prac_2.addData('prac_resp2.rt', prac_resp2.rt)
    # the Routine "prac2_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "prac2_feedback"-------
    t = 0
    prac2_feedbackClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    routineTimer.add(0.600000)
    # update component parameters for each repeat
    if prac_resp2.corr:
        msg='Correct!'
        msgColor='green'
    else:
        msg='Incorrect!'
        msgColor='red'
    prac2_feed.setColor(msgColor, colorSpace='rgb')
    prac2_feed.setText(msg)
    # keep track of which components have finished
    prac2_feedbackComponents = [prac2_feed]
    for thisComponent in prac2_feedbackComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "prac2_feedback"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = prac2_feedbackClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        
        # *prac2_feed* updates
        if t >= 0.0 and prac2_feed.status == NOT_STARTED:
            # keep track of start time/frame for later
            prac2_feed.tStart = t
            prac2_feed.frameNStart = frameN  # exact frame index
            prac2_feed.setAutoDraw(True)
        frameRemains = 0.0 + 0.6- win.monitorFramePeriod * 0.75  # most of one frame period left
        if prac2_feed.status == STARTED and t >= frameRemains:
            prac2_feed.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in prac2_feedbackComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "prac2_feedback"-------
    for thisComponent in prac2_feedbackComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    thisExp.nextEntry()
    
# completed 1 repeats of 'prac_2'


# ------Prepare to start Routine "Prac_Over"-------
t = 0
Prac_OverClock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
pover_resp = event.BuilderKeyResponse()
# keep track of which components have finished
Prac_OverComponents = [prac_over, pover_resp]
for thisComponent in Prac_OverComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "Prac_Over"-------
while continueRoutine:
    # get current time
    t = Prac_OverClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *prac_over* updates
    if t >= 0.0 and prac_over.status == NOT_STARTED:
        # keep track of start time/frame for later
        prac_over.tStart = t
        prac_over.frameNStart = frameN  # exact frame index
        prac_over.setAutoDraw(True)
    
    # *pover_resp* updates
    if t >= 0.0 and pover_resp.status == NOT_STARTED:
        # keep track of start time/frame for later
        pover_resp.tStart = t
        pover_resp.frameNStart = frameN  # exact frame index
        pover_resp.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(pover_resp.clock.reset)  # t=0 on next screen flip
        event.clearEvents(eventType='keyboard')
    if pover_resp.status == STARTED:
        theseKeys = event.getKeys()
        
        # check for quit:
        if "escape" in theseKeys:
            endExpNow = True
        if len(theseKeys) > 0:  # at least one key was pressed
            if pover_resp.keys == []:  # then this was the first keypress
                pover_resp.keys = theseKeys[0]  # just the first key pressed
                pover_resp.rt = pover_resp.clock.getTime()
                # a response ends the routine
                continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Prac_OverComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Prac_Over"-------
for thisComponent in Prac_OverComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if pover_resp.keys in ['', [], None]:  # No response was made
    pover_resp.keys=None
thisExp.addData('pover_resp.keys',pover_resp.keys)
if pover_resp.keys != None:  # we had a response
    thisExp.addData('pover_resp.rt', pover_resp.rt)
thisExp.nextEntry()
# the Routine "Prac_Over" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
Groups = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('groups.xlsx'),
    seed=None, name='Groups')
thisExp.addLoop(Groups)  # add the loop to the experiment
thisGroup = Groups.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisGroup.rgb)
if thisGroup != None:
    for paramName in thisGroup:
        exec('{} = thisGroup[paramName]'.format(paramName))

for thisGroup in Groups:
    currentLoop = Groups
    # abbreviate parameter names if possible (e.g. rgb = thisGroup.rgb)
    if thisGroup != None:
        for paramName in thisGroup:
            exec('{} = thisGroup[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    masterBlock = data.TrialHandler(nReps=1, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(countgroups),
        seed=None, name='masterBlock')
    thisExp.addLoop(masterBlock)  # add the loop to the experiment
    thisMasterBlock = masterBlock.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisMasterBlock.rgb)
    if thisMasterBlock != None:
        for paramName in thisMasterBlock:
            exec('{} = thisMasterBlock[paramName]'.format(paramName))
    
    for thisMasterBlock in masterBlock:
        currentLoop = masterBlock
        # abbreviate parameter names if possible (e.g. rgb = thisMasterBlock.rgb)
        if thisMasterBlock != None:
            for paramName in thisMasterBlock:
                exec('{} = thisMasterBlock[paramName]'.format(paramName))
        
        # set up handler to look after randomisation of conditions etc
        Block1 = data.TrialHandler(nReps=1, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions(masterFile),
            seed=None, name='Block1')
        thisExp.addLoop(Block1)  # add the loop to the experiment
        thisBlock1 = Block1.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisBlock1.rgb)
        if thisBlock1 != None:
            for paramName in thisBlock1:
                exec('{} = thisBlock1[paramName]'.format(paramName))
        
        for thisBlock1 in Block1:
            currentLoop = Block1
            # abbreviate parameter names if possible (e.g. rgb = thisBlock1.rgb)
            if thisBlock1 != None:
                for paramName in thisBlock1:
                    exec('{} = thisBlock1[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "SpecInstructions"-------
            t = 0
            SpecInstructionsClock.reset()  # clock
            frameN = -1
            continueRoutine = True
            # update component parameters for each repeat
            instrSR.setText(instr)
            ready2 = event.BuilderKeyResponse()
            # keep track of which components have finished
            SpecInstructionsComponents = [instrSR, ready2]
            for thisComponent in SpecInstructionsComponents:
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            
            # -------Start Routine "SpecInstructions"-------
            while continueRoutine:
                # get current time
                t = SpecInstructionsClock.getTime()
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *instrSR* updates
                if t >= 0 and instrSR.status == NOT_STARTED:
                    # keep track of start time/frame for later
                    instrSR.tStart = t
                    instrSR.frameNStart = frameN  # exact frame index
                    instrSR.setAutoDraw(True)
                
                # *ready2* updates
                if t >= 0.0 and ready2.status == NOT_STARTED:
                    # keep track of start time/frame for later
                    ready2.tStart = t
                    ready2.frameNStart = frameN  # exact frame index
                    ready2.status = STARTED
                    # keyboard checking is just starting
                    event.clearEvents(eventType='keyboard')
                if ready2.status == STARTED:
                    theseKeys = event.getKeys()
                    
                    # check for quit:
                    if "escape" in theseKeys:
                        endExpNow = True
                    if len(theseKeys) > 0:  # at least one key was pressed
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or event.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in SpecInstructionsComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "SpecInstructions"-------
            for thisComponent in SpecInstructionsComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "SpecInstructions" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # set up handler to look after randomisation of conditions etc
            StopSide = data.TrialHandler(nReps=1, method='random', 
                extraInfo=expInfo, originPath=-1,
                trialList=data.importConditions(condFile),
                seed=None, name='StopSide')
            thisExp.addLoop(StopSide)  # add the loop to the experiment
            thisStopSide = StopSide.trialList[0]  # so we can initialise stimuli with some values
            # abbreviate parameter names if possible (e.g. rgb = thisStopSide.rgb)
            if thisStopSide != None:
                for paramName in thisStopSide:
                    exec('{} = thisStopSide[paramName]'.format(paramName))
            
            for thisStopSide in StopSide:
                currentLoop = StopSide
                # abbreviate parameter names if possible (e.g. rgb = thisStopSide.rgb)
                if thisStopSide != None:
                    for paramName in thisStopSide:
                        exec('{} = thisStopSide[paramName]'.format(paramName))
                
                # ------Prepare to start Routine "trial"-------
                t = 0
                trialClock.reset()  # clock
                frameN = -1
                continueRoutine = True
                # update component parameters for each repeat
                jitter = random() * (1.0 - 0.5) + 0.5
                jitter = round(jitter, 1) # round to 1 decimal place
                
                
                image.setImage(imageFile)
                earlyresp = event.BuilderKeyResponse()
                triangle.setPos([posX, posY])
                resp = event.BuilderKeyResponse()
                # keep track of which components have finished
                trialComponents = [fixation1, image, earlyresp, fixation2, triangle, resp]
                for thisComponent in trialComponents:
                    if hasattr(thisComponent, 'status'):
                        thisComponent.status = NOT_STARTED
                
                # -------Start Routine "trial"-------
                while continueRoutine:
                    # get current time
                    t = trialClock.getTime()
                    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                    # update/draw components on each frame
                    
                    
                    # *fixation1* updates
                    if t >= 0.0 and fixation1.status == NOT_STARTED:
                        # keep track of start time/frame for later
                        fixation1.tStart = t
                        fixation1.frameNStart = frameN  # exact frame index
                        fixation1.setAutoDraw(True)
                    frameRemains = 0.0 + jitter- win.monitorFramePeriod * 0.75  # most of one frame period left
                    if fixation1.status == STARTED and t >= frameRemains:
                        fixation1.setAutoDraw(False)
                    
                    # *image* updates
                    if t >= jitter and image.status == NOT_STARTED:
                        # keep track of start time/frame for later
                        image.tStart = t
                        image.frameNStart = frameN  # exact frame index
                        image.setAutoDraw(True)
                    frameRemains = jitter + 0.1- win.monitorFramePeriod * 0.75  # most of one frame period left
                    if image.status == STARTED and t >= frameRemains:
                        image.setAutoDraw(False)
                    
                    # *earlyresp* updates
                    if t >= jitter and earlyresp.status == NOT_STARTED:
                        # keep track of start time/frame for later
                        earlyresp.tStart = t
                        earlyresp.frameNStart = frameN  # exact frame index
                        earlyresp.status = STARTED
                        # keyboard checking is just starting
                        win.callOnFlip(earlyresp.clock.reset)  # t=0 on next screen flip
                        event.clearEvents(eventType='keyboard')
                    frameRemains = jitter + 1.0- win.monitorFramePeriod * 0.75  # most of one frame period left
                    if earlyresp.status == STARTED and t >= frameRemains:
                        earlyresp.status = FINISHED
                    if earlyresp.status == STARTED:
                        theseKeys = event.getKeys()
                        
                        # check for quit:
                        if "escape" in theseKeys:
                            endExpNow = True
                        if len(theseKeys) > 0:  # at least one key was pressed
                            if earlyresp.keys == []:  # then this was the first keypress
                                earlyresp.keys = theseKeys[0]  # just the first key pressed
                                earlyresp.rt = earlyresp.clock.getTime()
                    
                    # *fixation2* updates
                    if t >= jitter+0.1 and fixation2.status == NOT_STARTED:
                        # keep track of start time/frame for later
                        fixation2.tStart = t
                        fixation2.frameNStart = frameN  # exact frame index
                        fixation2.setAutoDraw(True)
                    frameRemains = jitter+0.1 + 0.9- win.monitorFramePeriod * 0.75  # most of one frame period left
                    if fixation2.status == STARTED and t >= frameRemains:
                        fixation2.setAutoDraw(False)
                    
                    # *triangle* updates
                    if t >= jitter+1.0 and triangle.status == NOT_STARTED:
                        # keep track of start time/frame for later
                        triangle.tStart = t
                        triangle.frameNStart = frameN  # exact frame index
                        triangle.setAutoDraw(True)
                    frameRemains = jitter+1.0 + 0.1- win.monitorFramePeriod * 0.75  # most of one frame period left
                    if triangle.status == STARTED and t >= frameRemains:
                        triangle.setAutoDraw(False)
                    
                    # *resp* updates
                    if t >= jitter+1.0 and resp.status == NOT_STARTED:
                        # keep track of start time/frame for later
                        resp.tStart = t
                        resp.frameNStart = frameN  # exact frame index
                        resp.status = STARTED
                        # keyboard checking is just starting
                        win.callOnFlip(resp.clock.reset)  # t=0 on next screen flip
                        event.clearEvents(eventType='keyboard')
                    frameRemains = jitter+1.0 + 0.6- win.monitorFramePeriod * 0.75  # most of one frame period left
                    if resp.status == STARTED and t >= frameRemains:
                        resp.status = FINISHED
                    if resp.status == STARTED:
                        theseKeys = event.getKeys(keyList=['c', 'm'])
                        
                        # check for quit:
                        if "escape" in theseKeys:
                            endExpNow = True
                        if len(theseKeys) > 0:  # at least one key was pressed
                            if resp.keys == []:  # then this was the first keypress
                                resp.keys = theseKeys[0]  # just the first key pressed
                                resp.rt = resp.clock.getTime()
                                # was this 'correct'?
                                if (resp.keys == str(corrAns)) or (resp.keys == corrAns):
                                    resp.corr = 1
                                else:
                                    resp.corr = 0
                    
                    # check for quit (typically the Esc key)
                    if endExpNow or event.getKeys(keyList=["escape"]):
                        core.quit()
                    
                    # check if all components have finished
                    if not continueRoutine:  # a component has requested a forced-end of Routine
                        break
                    continueRoutine = False  # will revert to True if at least one component still running
                    for thisComponent in trialComponents:
                        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                            continueRoutine = True
                            break  # at least one component has not yet finished
                    
                    # refresh the screen
                    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                        win.flip()
                
                # -------Ending Routine "trial"-------
                for thisComponent in trialComponents:
                    if hasattr(thisComponent, "setAutoDraw"):
                        thisComponent.setAutoDraw(False)
                StopSide.addData('jitter', jitter)
                # check responses
                if earlyresp.keys in ['', [], None]:  # No response was made
                    earlyresp.keys=None
                StopSide.addData('earlyresp.keys',earlyresp.keys)
                if earlyresp.keys != None:  # we had a response
                    StopSide.addData('earlyresp.rt', earlyresp.rt)
                # check responses
                if resp.keys in ['', [], None]:  # No response was made
                    resp.keys=None
                    # was no response the correct answer?!
                    if str(corrAns).lower() == 'none':
                       resp.corr = 1;  # correct non-response
                    else:
                       resp.corr = 0;  # failed to respond (incorrectly)
                # store data for StopSide (TrialHandler)
                StopSide.addData('resp.keys',resp.keys)
                StopSide.addData('resp.corr', resp.corr)
                if resp.keys != None:  # we had a response
                    StopSide.addData('resp.rt', resp.rt)
                # the Routine "trial" was not non-slip safe, so reset the non-slip timer
                routineTimer.reset()
                
                # ------Prepare to start Routine "feedback"-------
                t = 0
                feedbackClock.reset()  # clock
                frameN = -1
                continueRoutine = True
                routineTimer.add(0.600000)
                # update component parameters for each repeat
                if resp.corr:
                    msg='Correct!'
                    msgColor='green'
                else:
                    msg='Incorrect!'
                    msgColor='red'
                feedbackText.setColor(msgColor, colorSpace='rgb')
                feedbackText.setText(msg)
                # keep track of which components have finished
                feedbackComponents = [feedbackText]
                for thisComponent in feedbackComponents:
                    if hasattr(thisComponent, 'status'):
                        thisComponent.status = NOT_STARTED
                
                # -------Start Routine "feedback"-------
                while continueRoutine and routineTimer.getTime() > 0:
                    # get current time
                    t = feedbackClock.getTime()
                    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                    # update/draw components on each frame
                    
                    
                    # *feedbackText* updates
                    if t >= 0.0 and feedbackText.status == NOT_STARTED:
                        # keep track of start time/frame for later
                        feedbackText.tStart = t
                        feedbackText.frameNStart = frameN  # exact frame index
                        feedbackText.setAutoDraw(True)
                    frameRemains = 0.0 + 0.6- win.monitorFramePeriod * 0.75  # most of one frame period left
                    if feedbackText.status == STARTED and t >= frameRemains:
                        feedbackText.setAutoDraw(False)
                    
                    # check for quit (typically the Esc key)
                    if endExpNow or event.getKeys(keyList=["escape"]):
                        core.quit()
                    
                    # check if all components have finished
                    if not continueRoutine:  # a component has requested a forced-end of Routine
                        break
                    continueRoutine = False  # will revert to True if at least one component still running
                    for thisComponent in feedbackComponents:
                        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                            continueRoutine = True
                            break  # at least one component has not yet finished
                    
                    # refresh the screen
                    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                        win.flip()
                
                # -------Ending Routine "feedback"-------
                for thisComponent in feedbackComponents:
                    if hasattr(thisComponent, "setAutoDraw"):
                        thisComponent.setAutoDraw(False)
                
                thisExp.nextEntry()
                
            # completed 1 repeats of 'StopSide'
            
            thisExp.nextEntry()
            
        # completed 1 repeats of 'Block1'
        
        thisExp.nextEntry()
        
    # completed 1 repeats of 'masterBlock'
    
    thisExp.nextEntry()
    
# completed 1 repeats of 'Groups'


# ------Prepare to start Routine "thanks"-------
t = 0
thanksClock.reset()  # clock
frameN = -1
continueRoutine = True
routineTimer.add(3.000000)
# update component parameters for each repeat
# keep track of which components have finished
thanksComponents = [thankyou]
for thisComponent in thanksComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "thanks"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = thanksClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *thankyou* updates
    if t >= 0.0 and thankyou.status == NOT_STARTED:
        # keep track of start time/frame for later
        thankyou.tStart = t
        thankyou.frameNStart = frameN  # exact frame index
        thankyou.setAutoDraw(True)
    frameRemains = 0.0 + 3.0- win.monitorFramePeriod * 0.75  # most of one frame period left
    if thankyou.status == STARTED and t >= frameRemains:
        thankyou.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in thanksComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "thanks"-------
for thisComponent in thanksComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)






# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
