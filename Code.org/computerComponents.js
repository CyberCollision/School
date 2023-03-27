//------ Citations ------\\
// Command Prompt, Taskbar, minMaxExit | Windows 10
// icons | https://thenounproject.com
// Computer Components | https://pcpartpicker.com

// App link: https://studio.code.org/projects/applab/vy9gMJoqqZt5n1fV3ZZ7IXMGR2bjSERC8tnj-2qJtbw

// Creation date: Oct 21, 2022
// Completion date: Nov 10, 2022


//------ Homepage ------\\


// Exit Command Prompt
onEvent("exitCommandPrompt", "click", function( ) {
  hideElement("commandPrompt");
  hideElement("instructions");
  hideElement("tip");
  hideElement("blackbox");
  hideElement("exitCommandPrompt");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// howItWorks Button
onEvent("howItWorksButton", "click", function( ) {
  setScreen("howComputersWork");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// partsOfAComputer Button
onEvent("partsOfAComputerButton", "click", function( ) {
  setScreen("partsOfAComputer");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// peripherals Button
onEvent("peripheralsButton", "click", function( ) {
  setScreen("peripherals");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});


//------ How Computers Work ------\\

// exit program Button
onEvent("miniMaxExit", "click", function( ) {
  setScreen("homepage");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// homepage Button
onEvent("startmenu2", "click", function( ) {
  setScreen("homepage");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// partsOfAComputer Button
onEvent("partsOfAComputerButton2", "click", function( ) {
  setScreen("partsOfAComputer");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// peripherals Button
onEvent("peripheralsButton2", "click", function( ) {
  setScreen("peripherals");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});


//------ How To Build ------\\

// exit program Button
onEvent("miniMaxExit2", "click", function( ) {
  setScreen("homepage");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// Exit Command Prompt
onEvent("exitCommandPrompt2", "click", function( ) {
  hideElement("commandPrompt2");
  hideElement("commandPromptText");
  hideElement("blackbox2");
  hideElement("exitCommandPrompt2");
  hideElement("arrow");
  showElement("caseButton");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// homepage Button
onEvent("startmenu3", "click", function( ) {
  setScreen("homepage");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// howItWorks Button
onEvent("howItWorksButton3", "click", function( ) {
  setScreen("howComputersWork");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// peripherals Button
onEvent("peripheralsButton3", "click", function( ) {
  setScreen("peripherals");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// case Button (open command prompt)
onEvent("caseButton", "click", function( ) {
  showElement("commandPrompt2");
  showElement("commandPromptText");
  showElement("blackbox2");
  showElement("exitCommandPrompt3");
  setText("commandPromptText", "Case: holds most of a computer's components.");
  showElement("caseImage");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// case Button (exit command prompt)
onEvent("exitCommandPrompt3", "click", function( ) {
  hideElement("commandPrompt2");
  hideElement("commandPromptText");
  hideElement("blackbox2");
  hideElement("exitCommandPrompt3");
  hideElement("caseImage");
  hideElement("caseButton");
  showElement("motherboard");
  showElement("motherboardButton");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// motherboard Button (open command prompt)
onEvent("motherboardButton", "click", function( ) {
  showElement("commandPrompt2");
  showElement("commandPromptText");
  showElement("blackbox2");
  showElement("exitCommandPrompt4");
  setText("commandPromptText", "Motherboard: the main circuit board inside a computer that connects the different parts of a computer.");
  showElement("motherboardImage");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// motherboard Button (exit command prompt)
onEvent("exitCommandPrompt4", "click", function( ) {
  hideElement("commandPrompt2");
  hideElement("commandPromptText");
  hideElement("blackbox2");
  hideElement("exitCommandPrompt4");
  hideElement("motherboardImage");
  hideElement("motherboardButton");
  showElement("cpu");
  showElement("cpuButton");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// cpu Button (open command prompt)
onEvent("cpuButton", "click", function( ) {
  showElement("commandPrompt2");
  showElement("commandPromptText");
  showElement("blackbox2");
  showElement("exitCommandPrompt5");
  setText("commandPromptText", "CPU: processes the instructions that come from programs, operating system, or other components in your computer.");
  showElement("cpuImage");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// cpu Button (exit command prompt)
onEvent("exitCommandPrompt5", "click", function( ) {
  hideElement("commandPrompt2");
  hideElement("commandPromptText");
  hideElement("blackbox2");
  hideElement("exitCommandPrompt5");
  hideElement("cpuImage");
  hideElement("cpuButton");
  showElement("ram");
  showElement("ramButton");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// ram Button (open command prompt)
onEvent("ramButton", "click", function( ) {
  showElement("commandPrompt2");
  showElement("commandPromptText");
  showElement("blackbox2");
  showElement("exitCommandPrompt6");
  setText("commandPromptText", "RAM: the computer's memory that stores user data.");
  showElement("ramImage");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// ram Button (exit command prompt)
onEvent("exitCommandPrompt6", "click", function( ) {
  hideElement("commandPrompt2");
  hideElement("commandPromptText");
  hideElement("blackbox2");
  hideElement("exitCommandPrompt6");
  hideElement("ramImage");
  hideElement("ramButton");
  showElement("cpuCooler");
  showElement("cpuCoolerButton");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// cpuCooler Button (open command prompt)
onEvent("cpuCoolerButton", "click", function( ) {
  showElement("commandPrompt2");
  showElement("commandPromptText");
  showElement("blackbox2");
  showElement("exitCommandPrompt7");
  setText("commandPromptText", "CPU Cooler: A component that draws heat away from a CPU chip and other hot-running chips such as the GPU");
  showElement("cpuCoolerImage");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// cpuCooler Button (exit command prompt)
onEvent("exitCommandPrompt7", "click", function( ) {
  hideElement("commandPrompt2");
  hideElement("commandPromptText");
  hideElement("blackbox2");
  hideElement("exitCommandPrompt7");
  hideElement("cpuCoolerImage");
  hideElement("cpuCoolerButton");
  showElement("m.2SSD");
  showElement("m.2SSDButton");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// m.2SSD Button (open command prompt)
onEvent("m.2SSDButton", "click", function( ) {
  showElement("commandPrompt2");
  showElement("commandPromptText");
  showElement("blackbox2");
  showElement("exitCommandPrompt8");
  setText("commandPromptText", "NVME M.2 SSD: works alongside your system’s memory and processor to access and use data.");
  showElement("m.2SSDImage");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// m.2SSD Button (exit command prompt)
onEvent("exitCommandPrompt8", "click", function( ) {
  hideElement("commandPrompt2");
  hideElement("commandPromptText");
  hideElement("blackbox2");
  hideElement("exitCommandPrompt8");
  hideElement("m.2SSDImage");
  hideElement("m.2SSDButton");
  showElement("psu");
  showElement("psuButton");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// psu Button (open command prompt)
onEvent("psuButton", "click", function( ) {
  showElement("commandPrompt2");
  showElement("commandPromptText");
  showElement("blackbox2");
  showElement("exitCommandPrompt9");
  setText("commandPromptText", "PSU: converts the power provided from the outlet into usable power for the other components.");
  showElement("psuImage");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// psu Button (exit command prompt)
onEvent("exitCommandPrompt9", "click", function( ) {
  hideElement("commandPrompt2");
  hideElement("commandPromptText");
  hideElement("blackbox2");
  hideElement("exitCommandPrompt9");
  hideElement("psuImage");
  hideElement("psuButton");
  showElement("gpu");
  showElement("gpuButton");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// gpu Button (open command prompt)
onEvent("gpuButton", "click", function( ) {
  showElement("commandPrompt2");
  showElement("commandPromptText");
  showElement("blackbox2");
  showElement("exitCommandPrompt10");
  setText("commandPromptText", "GPU: renders images, video and 2D or 3D animations for display. A GPU performs quick math calculations and frees up the CPU to do other things.");
  showElement("gpuImage");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// gpu Button (exit command prompt)
onEvent("exitCommandPrompt10", "click", function( ) {
  hideElement("commandPrompt2");
  hideElement("commandPromptText");
  hideElement("blackbox2");
  hideElement("exitCommandPrompt10");
  hideElement("gpuImage");
  hideElement("gpuButton");
  showElement("caseFans");
  showElement("caseFansButton");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// caseFans Button (open command prompt)
onEvent("caseFansButton", "click", function( ) {
  showElement("commandPrompt2");
  showElement("commandPromptText");
  showElement("blackbox2");
  showElement("exitCommandPrompt11");
  setText("commandPromptText", "Case Fans: for active cooling; can be placed on either side, intake and exhaust");
  showElement("caseFansImage");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// caseFans Button (exit command prompt)
onEvent("exitCommandPrompt11", "click", function( ) {
  hideElement("commandPrompt2");
  hideElement("commandPromptText");
  hideElement("blackbox2");
  hideElement("exitCommandPrompt11");
  hideElement("caseFansImage");
  hideElement("caseFansButton");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

//------ Peripherals ------\\

// exit program Button
onEvent("miniMaxExit3", "click", function( ) {
  setScreen("homepage");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// homepage Button
onEvent("startmenu4", "click", function( ) {
  setScreen("homepage");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// howItWorks Button
onEvent("howItWorksButton4", "click", function( ) {
  setScreen("howComputersWork");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});

// partsOfAComputer Button
onEvent("partsOfAComputerButton4", "click", function( ) {
  setScreen("partsOfAComputer");
  playSound("sound://category_app/modern_ui_sound.mp3", false);
});
