// ================= CONFIG =================
const QUIZ_LIMIT = 15;
const QUESTION_TIME = 30;

// ================= QUESTION BANK =================
const questionBank = {
  easy: {
    grammar: [
      { q: "He is junior ___ me.", o: ["than", "to", "from", "by"], a: 1 },
      { q: "Choose correct: He ___ to school daily.", o: ["go", "goes", "going", "gone"], a: 1 },
      { q: "She prefers tea ___ coffee.", o: ["than", "to", "over", "with"], a: 1 },
      { q: "He is fond ___ music.", o: ["in", "on", "of", "to"], a: 2 },
      { q: "I am afraid ___ dogs.", o: ["from", "with", "of", "to"], a: 2 },
      { q: "He is good ___ mathematics.", o: ["at", "in", "on", "with"], a: 0 },
      { q: "She is married ___ a doctor.", o: ["to", "with", "by", "from"], a: 0 },
      { q: "The train arrives ___ 6 a.m.", o: ["in", "on", "at", "by"], a: 2 },
      { q: "He has been working here ___ five years.", o: ["since", "for", "from", "by"], a: 1 },
      { q: "We have lived here ___ 2010.", o: ["since", "for", "from", "by"], a: 0 },
    
        { q: "She is afraid ___ dogs.", o: ["from", "with", "of", "to"], a: 2 },
      { q: "I ___ a letter now.", o: ["write", "wrote", "am writing", "written"], a: 2 },
      { q:"He ___ to school daily.", o:["go","goes","going","gone"], a:1 },
    { q:"She ___ coffee every morning.", o:["drink","drinks","drinking","drank"], a:1 },
    { q:"They ___ playing now.", o:["is","are","was","were"], a:1 },
    { q:"I ___ finished my work.", o:["has","have","had","having"], a:1 },
    { q:"We ___ in India.", o:["live","lives","living","lived"], a:0 },
  { q:"He ___ to school every day.", o:["go","goes","going","gone"], a:1 },
  { q:"She ___ coffee in the morning.", o:["drink","drinks","drank","drinking"], a:1 },
  { q:"They ___ playing now.", o:["is","are","was","were"], a:1 },
  { q:"I ___ finished my work.", o:["has","have","had","having"], a:1 },
  { q:"We ___ in Delhi since 2015.", o:["live","lived","have lived","living"], a:2 },

  { q:"The sun ___ in the east.", o:["rise","rises","rose","rising"], a:1 },
  { q:"She ___ a song now.", o:["sing","sings","is singing","sang"], a:2 },
  { q:"He ___ his work yesterday.", o:["finish","finished","finishes","finishing"], a:1 },
  { q:"We ___ TV when he came.", o:["watch","watched","were watching","are watching"], a:2 },
  { q:"She ___ already left.", o:["has","have","had","having"], a:0 },

  { q:"Each of the boys ___ present.", o:["are","were","is","have"], a:2 },
  { q:"Neither of the answers ___ correct.", o:["are","were","is","have"], a:2 },
  { q:"Everyone ___ his duty.", o:["do","does","doing","done"], a:1 },
  { q:"One of the students ___ absent today.", o:["are","were","is","have"], a:2 },
  { q:"The news ___ very shocking.", o:["are","were","is","have"], a:2 },

  { q:"Mathematics ___ my favourite subject.", o:["are","were","is","have"], a:2 },
  { q:"A number of students ___ absent today.", o:["is","was","are","has"], a:2 },
  { q:"The number of students ___ increasing every year.", o:["are","were","is","have"], a:2 },
  { q:"She is taller ___ her sister.", o:["than","to","from","by"], a:0 },
  { q:"He is senior ___ me.", o:["than","to","from","by"], a:1 },

  { q:"She prefers tea ___ coffee.", o:["than","to","over","with"], a:1 },
  { q:"He is fond ___ music.", o:["in","on","of","to"], a:2 },
  { q:"I am afraid ___ dogs.", o:["from","with","of","to"], a:2 },
  { q:"He is good ___ mathematics.", o:["at","in","on","with"], a:0 },
  { q:"She is married ___ a doctor.", o:["to","with","by","from"], a:0 },

  { q:"The train arrives ___ 6 a.m.", o:["in","on","at","by"], a:2 },
  { q:"He has been working here ___ five years.", o:["since","for","from","by"], a:1 },
  { q:"We have lived here ___ 2010.", o:["since","for","from","by"], a:0 },
  { q:"He is interested ___ music.", o:["on","in","of","with"], a:1 },
  { q:"She is proud ___ her son.", o:["at","in","of","with"], a:2 },
{ q:"He ___ to school every day.", o:["go","goes","going","gone"], a:1 },
{ q:"She ___ coffee in the morning.", o:["drink","drinks","drank","drinking"], a:1 },
{ q:"They ___ playing now.", o:["is","are","was","were"], a:1 },
{ q:"I ___ finished my work.", o:["has","have","had","having"], a:1 },
{ q:"We ___ in Delhi since 2015.", o:["live","lived","have lived","living"], a:2 },

{ q:"The sun ___ in the east.", o:["rise","rises","rose","rising"], a:1 },
{ q:"She ___ a song now.", o:["sing","sings","is singing","sang"], a:2 },
{ q:"He ___ his work yesterday.", o:["finish","finished","finishes","finishing"], a:1 },
{ q:"We ___ TV when he came.", o:["watch","watched","were watching","are watching"], a:2 },
{ q:"She ___ already left.", o:["has","have","had","having"], a:0 },

{ q:"Each of the boys ___ present.", o:["are","were","is","have"], a:2 },
{ q:"Neither of the answers ___ correct.", o:["are","were","is","have"], a:2 },
{ q:"Everyone ___ his duty.", o:["do","does","doing","done"], a:1 },
{ q:"One of the students ___ absent today.", o:["are","were","is","have"], a:2 },
{ q:"The news ___ very shocking.", o:["are","were","is","have"], a:2 },

{ q:"Mathematics ___ my favourite subject.", o:["are","were","is","have"], a:2 },
{ q:"A number of students ___ absent today.", o:["is","was","are","has"], a:2 },
{ q:"The number of students ___ increasing every year.", o:["are","were","is","have"], a:2 },
{ q:"She is taller ___ her sister.", o:["than","to","from","by"], a:0 },
{ q:"He is senior ___ me.", o:["than","to","from","by"], a:1 },

{ q:"She prefers tea ___ coffee.", o:["than","to","over","with"], a:1 },
{ q:"He is fond ___ music.", o:["in","on","of","to"], a:2 },
{ q:"I am afraid ___ dogs.", o:["from","with","of","to"], a:2 },
{ q:"He is good ___ mathematics.", o:["at","in","on","with"], a:0 },
{ q:"She is married ___ a doctor.", o:["to","with","by","from"], a:0 },

{ q:"The train arrives ___ 6 a.m.", o:["in","on","at","by"], a:2 },
{ q:"He has been working here ___ five years.", o:["since","for","from","by"], a:1 },
{ q:"We have lived here ___ 2010.", o:["since","for","from","by"], a:0 },
{ q:"He is interested ___ music.", o:["on","in","of","with"], a:1 },
{ q:"She is proud ___ her son.", o:["at","in","of","with"], a:2 },

{ q:"He did not come ___ he was ill.", o:["because","so","and","but"], a:0 },
{ q:"I waited ___ him for an hour.", o:["for","since","from","by"], a:0 },
{ q:"She is angry ___ me.", o:["with","on","at","by"], a:0 },
{ q:"He is famous ___ his honesty.", o:["for","with","by","to"], a:0 },
{ q:"He was punished ___ his mistake.", o:["for","by","with","to"], a:0 },

{ q:"She is looking ___ her keys.", o:["at","for","into","on"], a:1 },
{ q:"The child depends ___ his parents.", o:["on","in","of","to"], a:0 },
{ q:"He congratulated me ___ my success.", o:["on","for","with","to"], a:0 },
{ q:"She insisted ___ going there.", o:["on","for","with","to"], a:0 },
{ q:"He is busy ___ his work.", o:["in","at","with","on"], a:2 },

{ q:"He is capable ___ doing this work.", o:["of","for","to","with"], a:0 },
{ q:"She is tired ___ waiting.", o:["of","from","with","by"], a:0 },
{ q:"He was absent ___ class yesterday.", o:["in","from","at","by"], a:1 },
{ q:"She is known ___ everyone.", o:["to","by","for","with"], a:1 },
{ q:"He is responsible ___ this project.", o:["to","for","with","by"], a:1 },

{ q:"She has no interest ___ politics.", o:["in","on","of","with"], a:0 },
{ q:"He was surprised ___ the news.", o:["by","with","at","on"], a:2 },
{ q:"She is satisfied ___ her job.", o:["with","by","from","at"], a:0 },
{ q:"He apologized ___ his mistake.", o:["for","to","with","by"], a:1 },
{ q:"She is jealous ___ her sister.", o:["of","from","with","by"], a:0 },

{ q:"He was ashamed ___ his behavior.", o:["of","for","with","by"], a:0 },
{ q:"She is hopeful ___ success.", o:["for","of","to","with"], a:1 },
{ q:"He was late ___ the meeting.", o:["to","for","at","in"], a:1 },
{ q:"She is good ___ singing.", o:["in","at","with","on"], a:1 },
{ q:"He was punished ___ the teacher.", o:["for","by","with","to"], a:1 },

{ q:"She is different ___ her sister.", o:["than","from","to","with"], a:1 },
{ q:"He is afraid ___ failure.", o:["of","from","with","by"], a:0 },
{ q:"She is confident ___ her success.", o:["of","in","for","with"], a:1 },
{ q:"He was annoyed ___ her behavior.", o:["at","with","by","on"], a:1 },
{ q:"She is famous ___ her beauty.", o:["for","with","by","to"], a:0 },

{ q:"He is grateful ___ you.", o:["to","for","with","by"], a:0 },
{ q:"She is thankful ___ her parents.", o:["to","for","with","by"], a:0 },
{ q:"He was tired ___ the journey.", o:["of","from","with","by"], a:1 },
{ q:"She is keen ___ learning English.", o:["on","for","of","to"], a:0 },
{ q:"He is good ___ his friends.", o:["with","to","at","in"], a:0 },

{ q:"She is worried ___ her exam.", o:["about","for","of","with"], a:0 },
{ q:"He is responsible ___ his actions.", o:["to","for","with","by"], a:1 },
{ q:"She is familiar ___ this place.", o:["to","with","by","of"], a:1 },
{ q:"He is angry ___ his brother.", o:["with","on","at","by"], a:0 },
{ q:"She is famous ___ her songs.", o:["for","with","by","to"], a:0 },
{ q:"He is junior ___ me.", o:["than","to","from","by"], a:1 },
{ q:"No sooner had he arrived ___ it started raining.", o:["when","than","then","as"], a:1 },
{ q:"Neither of the boys ___ present.", o:["are","were","is","have"], a:2 },
{ q:"She did not ___ to the office yesterday.", o:["go","went","gone","going"], a:0 },
{ q:"Hardly ___ finished when the bell rang.", o:["had I","I had","have I","I have"], a:0 },

{ q:"Each of the students ___ given a book.", o:["are","were","is","have"], a:2 },
{ q:"The train arrived ___ time.", o:["in","on","at","by"], a:1 },
{ q:"He is good ___ mathematics.", o:["in","on","at","with"], a:2 },
{ q:"She prefers coffee ___ tea.", o:["than","to","from","with"], a:1 },
{ q:"He has been working here ___ five years.", o:["since","for","from","by"], a:1 },

{ q:"Scarcely ___ the match started when it began to rain.", o:["had","has","was","is"], a:0 },
{ q:"One of my friends ___ a doctor.", o:["are","were","is","have"], a:2 },
{ q:"He ran fast ___ he might catch the train.", o:["so","so that","because","although"], a:1 },
{ q:"She is senior ___ him.", o:["than","to","from","by"], a:1 },
{ q:"He was accused ___ theft.", o:["of","for","with","by"], a:0 },

{ q:"She is fond ___ music.", o:["on","at","of","with"], a:2 },
{ q:"The teacher was angry ___ the student.", o:["on","at","with","by"], a:2 },
{ q:"He is not aware ___ the danger.", o:["on","of","with","for"], a:1 },
{ q:"He congratulated me ___ my success.", o:["on","for","with","to"], a:0 },
{ q:"He was punished ___ his mistake.", o:["for","by","with","to"], a:0 },

{ q:"He is capable ___ doing this work.", o:["for","of","to","with"], a:1 },
{ q:"She insisted ___ going there.", o:["on","for","with","to"], a:0 },
{ q:"He is afraid ___ dogs.", o:["from","with","of","by"], a:2 },
{ q:"She was tired ___ waiting.", o:["of","from","with","by"], a:0 },
{ q:"He is interested ___ politics.", o:["on","in","of","with"], a:1 },

{ q:"She is proud ___ her son.", o:["for","of","with","by"], a:1 },
{ q:"He was late ___ the meeting.", o:["for","to","at","in"], a:0 },
{ q:"She is married ___ a doctor.", o:["with","to","by","from"], a:1 },
{ q:"He was surprised ___ the news.", o:["by","with","at","on"], a:2 },
{ q:"She is satisfied ___ her result.", o:["with","by","from","at"], a:0 },

{ q:"He apologized ___ his mistake.", o:["to","for","with","by"], a:0 },
{ q:"She is jealous ___ her sister.", o:["of","from","with","by"], a:0 },
{ q:"He is responsible ___ this work.", o:["to","for","with","by"], a:1 },
{ q:"She is familiar ___ this place.", o:["to","with","by","of"], a:1 },
{ q:"He is different ___ his brother.", o:["than","from","to","with"], a:1 },

{ q:"He was ashamed ___ his behavior.", o:["of","for","with","by"], a:0 },
{ q:"She is hopeful ___ success.", o:["for","of","to","with"], a:1 },
{ q:"He is busy ___ his work.", o:["in","at","with","on"], a:2 },
{ q:"She is keen ___ learning English.", o:["on","for","of","to"], a:0 },
{ q:"He was absent ___ class yesterday.", o:["in","from","at","by"], a:1 },

{ q:"She is famous ___ her honesty.", o:["for","with","by","to"], a:0 },
{ q:"He is grateful ___ you.", o:["to","for","with","by"], a:0 },
{ q:"She is thankful ___ her parents.", o:["to","for","with","by"], a:0 },
{ q:"He is worried ___ his exam.", o:["about","for","of","with"], a:0 },
{ q:"She is confident ___ her success.", o:["of","in","for","with"], a:1 },

{ q:"He was annoyed ___ her behavior.", o:["at","with","by","on"], a:1 },
{ q:"She is known ___ everyone.", o:["to","by","for","with"], a:1 },
{ q:"He is tired ___ the journey.", o:["of","from","with","by"], a:1 },
{ q:"She is good ___ singing.", o:["in","at","with","on"], a:1 },
{ q:"He is angry ___ his brother.", o:["with","on","at","by"], a:0 },

{ q:"She is worried ___ her future.", o:["about","for","of","with"], a:0 },
{ q:"He was accused ___ cheating.", o:["of","for","with","by"], a:0 },
{ q:"She is different ___ others.", o:["than","from","to","with"], a:1 },
{ q:"He is familiar ___ this rule.", o:["to","with","by","of"], a:1 },
{ q:"She is afraid ___ failure.", o:["of","from","with","by"], a:0 },
],
 
    vocab: [
      { q: "Synonym of 'Happy'?", o: ["Sad", "Joyful", "Angry", "Lazy"], a: 1 },
      { q: "Antonym of 'Hot'?", o: ["Cold", "Warm", "Heat", "Fire"], a: 0 },
      { q:"Synonym of 'Big'?", o:["Large","Tiny","Thin","Weak"], a:0 },
{ q: "Synonym of 'Happy'?", o: ["Sad", "Joyful", "Angry", "Lazy"], a: 1 },
{ q: "Synonym of 'Big'?", o: ["Small", "Large", "Thin", "Short"], a: 1 },
{ q: "Synonym of 'Fast'?", o: ["Quick", "Slow", "Late", "Weak"], a: 0 },
{ q: "Synonym of 'Cold'?", o: ["Hot", "Warm", "Cool", "Boiling"], a: 2 },
{ q: "Synonym of 'Begin'?", o: ["End", "Start", "Close", "Stop"], a: 1 },
{ q: "Synonym of 'Easy'?", o: ["Hard", "Simple", "Difficult", "Tough"], a: 1 },
{ q: "Synonym of 'Rich'?", o: ["Poor", "Wealthy", "Hungry", "Weak"], a: 1 },
{ q: "Synonym of 'Clean'?", o: ["Dirty", "Pure", "Bad", "Dark"], a: 1 },
{ q: "Synonym of 'Strong'?", o: ["Weak", "Powerful", "Thin", "Soft"], a: 1 },
{ q: "Synonym of 'Brave'?", o: ["Coward", "Fearless", "Lazy", "Weak"], a: 1 },

{ q: "Synonym of 'Quick'?", o: ["Fast", "Slow", "Late", "Dull"], a: 0 },
{ q: "Synonym of 'Smart'?", o: ["Clever", "Foolish", "Lazy", "Weak"], a: 0 },
{ q: "Synonym of 'Angry'?", o: ["Happy", "Mad", "Calm", "Soft"], a: 1 },
{ q: "Synonym of 'Calm'?", o: ["Angry", "Peaceful", "Loud", "Fast"], a: 1 },
{ q: "Synonym of 'Old'?", o: ["Young", "Ancient", "New", "Fresh"], a: 1 },
{ q: "Synonym of 'Small'?", o: ["Tiny", "Huge", "Large", "Big"], a: 0 },
{ q: "Synonym of 'Bright'?", o: ["Dark", "Shiny", "Dull", "Weak"], a: 1 },
{ q: "Synonym of 'Hot'?", o: ["Cold", "Warm", "Cool", "Freezing"], a: 1 },
{ q: "Synonym of 'Near'?", o: ["Close", "Far", "Away", "Distant"], a: 0 },
{ q: "Synonym of 'Love'?", o: ["Hate", "Affection", "Anger", "Fear"], a: 1 },

{ q: "Synonym of 'Help'?", o: ["Assist", "Harm", "Stop", "Break"], a: 0 },
{ q: "Synonym of 'Buy'?", o: ["Sell", "Purchase", "Give", "Lose"], a: 1 },
{ q: "Synonym of 'End'?", o: ["Finish", "Start", "Open", "Begin"], a: 0 },
{ q: "Synonym of 'Hard'?", o: ["Easy", "Difficult", "Soft", "Weak"], a: 1 },
{ q: "Synonym of 'Quiet'?", o: ["Silent", "Noisy", "Loud", "Shout"], a: 0 },
{ q: "Synonym of 'Right'?", o: ["Wrong", "Correct", "Bad", "False"], a: 1 },
{ q: "Synonym of 'Fear'?", o: ["Courage", "Terror", "Joy", "Hope"], a: 1 },
{ q: "Synonym of 'Start'?", o: ["Begin", "Finish", "Close", "End"], a: 0 },
{ q: "Synonym of 'Safe'?", o: ["Secure", "Dangerous", "Risky", "Harmful"], a: 0 },
{ q: "Synonym of 'Rich'?", o: ["Poor", "Wealthy", "Hungry", "Weak"], a: 1 },

{ q: "Synonym of 'Thin'?", o: ["Slim", "Fat", "Heavy", "Thick"], a: 0 },
{ q: "Synonym of 'Fat'?", o: ["Thin", "Obese", "Slim", "Light"], a: 1 },
{ q: "Synonym of 'Jump'?", o: ["Leap", "Sit", "Stand", "Sleep"], a: 0 },
{ q: "Synonym of 'Cry'?", o: ["Weep", "Laugh", "Smile", "Play"], a: 0 },
{ q: "Synonym of 'Laugh'?", o: ["Cry", "Smile", "Weep", "Fear"], a: 1 },
{ q: "Synonym of 'Beautiful'?", o: ["Ugly", "Pretty", "Bad", "Dirty"], a: 1 },
{ q: "Synonym of 'Ugly'?", o: ["Pretty", "Bad-looking", "Clean", "Nice"], a: 1 },
{ q: "Synonym of 'Strong'?", o: ["Weak", "Powerful", "Soft", "Thin"], a: 1 },
{ q: "Synonym of 'Weak'?", o: ["Strong", "Feeble", "Hard", "Bold"], a: 1 },
{ q: "Synonym of 'Bold'?", o: ["Brave", "Coward", "Shy", "Afraid"], a: 0 },

{ q: "Synonym of 'Quickly'?", o: ["Slowly", "Rapidly", "Late", "Weakly"], a: 1 },
{ q: "Synonym of 'Always'?", o: ["Never", "Forever", "Sometimes", "Rarely"], a: 1 },
{ q: "Synonym of 'Silent'?", o: ["Quiet", "Noisy", "Loud", "Talkative"], a: 0 },
{ q: "Synonym of 'Poor'?", o: ["Rich", "Needy", "Wealthy", "Strong"], a: 1 },
{ q: "Synonym of 'Anger'?", o: ["Joy", "Rage", "Peace", "Love"], a: 1 },
{ q: "Synonym of 'Buy'?", o: ["Sell", "Purchase", "Lose", "Drop"], a: 1 },
{ q: "Synonym of 'True'?", o: ["False", "Correct", "Wrong", "Bad"], a: 1 },
{ q: "Synonym of 'False'?", o: ["Wrong", "True", "Correct", "Right"], a: 0 },
{ q: "Synonym of 'Enemy'?", o: ["Friend", "Opponent", "Helper", "Ally"], a: 1 },
{ q: "Synonym of 'Friend'?", o: ["Enemy", "Buddy", "Foe", "Rival"], a: 1 },

{ q: "Synonym of 'Early'?", o: ["Late", "Soon", "Delay", "Slow"], a: 1 },
{ q: "Synonym of 'Late'?", o: ["Early", "Delayed", "Soon", "Fast"], a: 1 },
{ q: "Synonym of 'Work'?", o: ["Job", "Rest", "Sleep", "Play"], a: 0 },
{ q: "Synonym of 'Sleep'?", o: ["Awake", "Rest", "Work", "Run"], a: 1 },
{ q: "Synonym of 'Danger'?", o: ["Safety", "Risk", "Peace", "Help"], a: 1 },
{ q: "Synonym of 'Safe'?", o: ["Secure", "Risky", "Dangerous", "Bad"], a: 0 },
{ q: "Synonym of 'Clean'?", o: ["Dirty", "Neat", "Bad", "Ugly"], a: 1 },
{ q: "Synonym of 'Dirty'?", o: ["Clean", "Filthy", "Pure", "Neat"], a: 1 },
{ q: "Synonym of 'Strong'?", o: ["Weak", "Mighty", "Soft", "Light"], a: 1 },
{ q: "Synonym of 'End'?", o: ["Finish", "Start", "Begin", "Open"], a: 0 },

    { q:"Antonym of 'Early'?", o:["Soon","Late","Fast","Now"], a:1 },
    { q:"Meaning of 'Honest'?", o:["Truthful","Lazy","Angry","Weak"], a:0 },
    { q:"Synonym of 'Fast'?", o:["Quick","Slow","Late","Low"], a:0 },
    { q:"Antonym of 'Happy'?", o:["Glad","Joy","Sad","Smile"], a:2 },
    { q: "Antonym of 'Hot'?", o: ["Warm","Cold","Heat","Fire"], a: 1 },
{ q: "Antonym of 'Big'?", o: ["Large","Huge","Small","Tall"], a: 2 },
{ q: "Antonym of 'Happy'?", o: ["Joyful","Sad","Glad","Cheerful"], a: 1 },
{ q: "Antonym of 'Fast'?", o: ["Quick","Rapid","Slow","Swift"], a: 2 },
{ q: "Antonym of 'Rich'?", o: ["Wealthy","Poor","Money","Gold"], a: 1 },
{ q: "Antonym of 'Clean'?", o: ["Pure","Dirty","Neat","Fresh"], a: 1 },
{ q: "Antonym of 'Strong'?", o: ["Powerful","Weak","Hard","Bold"], a: 1 },
{ q: "Antonym of 'Brave'?", o: ["Fearless","Coward","Bold","Hero"], a: 1 },
{ q: "Antonym of 'Near'?", o: ["Close","Far","Beside","Next"], a: 1 },
{ q: "Antonym of 'Open'?", o: ["Start","Close","Begin","Free"], a: 1 },

{ q: "Antonym of 'Early'?", o: ["Soon","Late","Fast","Quick"], a: 1 },
{ q: "Antonym of 'Light'?", o: ["Bright","Heavy","Soft","Easy"], a: 1 },
{ q: "Antonym of 'Love'?", o: ["Care","Hate","Like","Enjoy"], a: 1 },
{ q: "Antonym of 'True'?", o: ["Correct","False","Right","Sure"], a: 1 },
{ q: "Antonym of 'Up'?", o: ["Top","Down","High","Above"], a: 1 },
{ q: "Antonym of 'Day'?", o: ["Light","Sun","Night","Morning"], a: 2 },
{ q: "Antonym of 'Old'?", o: ["Ancient","Young","Past","Aged"], a: 1 },
{ q: "Antonym of 'Hard'?", o: ["Tough","Soft","Strong","Firm"], a: 1 },
{ q: "Antonym of 'Buy'?", o: ["Take","Purchase","Sell","Get"], a: 2 },
{ q: "Antonym of 'Win'?", o: ["Gain","Lose","Score","Achieve"], a: 1 },

{ q: "One word for 'A place where books are kept'?", o: ["School","Library","Office","Shop"], a: 1 },
{ q: "One word for 'One who teaches'?", o: ["Student","Teacher","Doctor","Driver"], a: 1 },
{ q: "One word for 'One who drives a car'?", o: ["Pilot","Driver","Conductor","Guard"], a: 1 },
{ q: "One word for 'A place to treat sick people'?", o: ["School","Hospital","Office","Market"], a: 1 },
{ q: "One word for 'One who writes poems'?", o: ["Singer","Poet","Writer","Actor"], a: 1 },

{ q: "Meaning of 'Infant'?", o: ["Adult","Baby","Old man","Boy"], a: 1 },
{ q: "Meaning of 'Huge'?", o: ["Small","Tiny","Big","Short"], a: 2 },
{ q: "Meaning of 'Rapid'?", o: ["Slow","Fast","Late","Weak"], a: 1 },
{ q: "Meaning of 'Silent'?", o: ["Noisy","Quiet","Loud","Talk"], a: 1 },
{ q: "Meaning of 'Neat'?", o: ["Dirty","Clean","Ugly","Bad"], a: 1 },

{ q: "Plural of 'Child'?", o: ["Childs","Children","Childes","Child"], a: 1 },
{ q: "Plural of 'Man'?", o: ["Mans","Mens","Men","Man"], a: 2 },
{ q: "Opposite of 'Give'?", o: ["Take","Provide","Donate","Help"], a: 0 },
{ q: "Opposite of 'Enter'?", o: ["Come","Go","Exit","In"], a: 2 },
{ q: "Opposite of 'Full'?", o: ["Complete","Empty","Filled","Packed"], a: 1 },

{ q: "Correct spelling?", o: ["Enviroment","Environment","Enviornment","Envirment"], a: 1 },
{ q: "Correct spelling?", o: ["Beautifull","Beautiful","Beutiful","Butiful"], a: 1 },
{ q: "Correct spelling?", o: ["Succes","Success","Sucses","Succsess"], a: 1 },
{ q: "Correct spelling?", o: ["Governmant","Goverment","Government","Govermant"], a: 2 },
{ q: "Correct spelling?", o: ["Knowlege","Knowledge","Knowlage","Noledge"], a: 1 },
    ],
error: [
{ q: "Find error: He don't like tea.", o: ["He", "don't", "like", "tea"], a: 1 },
{ q:"Find error: He don't like milk.", o:["He","don't","like","milk"], a:1 },
{ q:"Find error: She go to school daily.", o:["She","go","to","school"], a:1 },
{ q: "He do not like tea.", o: ["He","do","not","like"], a: 1 },
{ q: "She have completed her work.", o: ["She","have","completed","her"], a: 1 },
{ q: "I am agree with you.", o: ["I","am","agree","with"], a: 2 },
{ q: "He did not went to school.", o: ["did","not","went","school"], a: 2 },
{ q: "She is more better than me.", o: ["more","better","than","me"], a: 0 },

{ q: "Each of the boys have a book.", o: ["Each","boys","have","book"], a: 2 },
{ q: "He is senior than me.", o: ["is","senior","than","me"], a: 2 },
{ q: "She does not knows my name.", o: ["does","not","knows","name"], a: 2 },
{ q: "I have seen him yesterday.", o: ["have","seen","him","yesterday"], a: 0 },
{ q: "He is going to market.", o: ["going","to","market",""], a: 1 },

{ q: "She is fond for music.", o: ["fond","for","music",""], a: 1 },
{ q: "They was playing cricket.", o: ["They","was","playing","cricket"], a: 1 },
{ q: "He did not knew the answer.", o: ["did","not","knew","answer"], a: 2 },
{ q: "She has less friends.", o: ["has","less","friends",""], a: 1 },
{ q: "He is the best than all.", o: ["the","best","than","all"], a: 2 },

{ q: "She is married with a doctor.", o: ["married","with","a","doctor"], a: 1 },
{ q: "One of the boys are absent.", o: ["One","boys","are","absent"], a: 2 },
{ q: "I prefer tea than coffee.", o: ["prefer","tea","than","coffee"], a: 2 },
{ q: "She did not wrote the letter.", o: ["did","not","wrote","letter"], a: 2 },
{ q: "He is suffering from cold since two days.", o: ["suffering","from","since","days"], a: 2 },

{ q: "She is good in English.", o: ["good","in","English",""], a: 1 },
{ q: "The news are very good.", o: ["news","are","very","good"], a: 1 },
{ q: "He told me that he is ill.", o: ["told","me","is","ill"], a: 2 },
{ q: "She has gone to market yesterday.", o: ["has","gone","yesterday",""], a: 0 },
{ q: "I did not received your letter.", o: ["did","not","received","letter"], a: 2 },

{ q: "He runs more faster than me.", o: ["more","faster","than","me"], a: 0 },
{ q: "She was absent in class.", o: ["absent","in","class",""], a: 1 },
{ q: "He is my cousin brother.", o: ["my","cousin","brother",""], a: 2 },
{ q: "She is elder than me.", o: ["elder","than","me",""], a: 1 },
{ q: "He did a mistake.", o: ["did","a","mistake",""], a: 0 },

{ q: "She is very much tired.", o: ["very","much","tired",""], a: 1 },
{ q: "He is addicted of smoking.", o: ["addicted","of","smoking",""], a: 1 },
{ q: "She returned back home.", o: ["returned","back","home",""], a: 1 },
{ q: "I have no any money.", o: ["no","any","money",""], a: 1 },
{ q: "He gave me many advices.", o: ["many","advices","me",""], a: 1 },

{ q: "She is knowing the answer.", o: ["is","knowing","answer",""], a: 1 },
{ q: "He does not likes apples.", o: ["does","not","likes","apples"], a: 2 },
{ q: "I am belonging to Delhi.", o: ["am","belonging","to","Delhi"], a: 1 },
{ q: "She discussed about the matter.", o: ["discussed","about","matter",""], a: 1 },
{ q: "He reached at the station late.", o: ["reached","at","station",""], a: 1 },
{ q: "She is junior than me.", o: ["junior","than","me",""], a: 1 },
{ q: "He has completed his work yesterday.", o: ["has","completed","yesterday",""], a: 0 },
{ q: "They are playing since morning.", o: ["are","playing","since","morning"], a: 0 },
{ q: "She did not spoke the truth.", o: ["did","not","spoke","truth"], a: 2 },
{ q: "He is superior than me.", o: ["superior","than","me",""], a: 1 },

{ q: "I have eaten the food before one hour.", o: ["have","eaten","before","hour"], a: 2 },
{ q: "She has less books than me.", o: ["less","books","than","me"], a: 0 },
{ q: "He is angry on me.", o: ["angry","on","me",""], a: 1 },
{ q: "She is suffering with fever.", o: ["suffering","with","fever",""], a: 1 },
{ q: "I did not saw him.", o: ["did","not","saw","him"], a: 2 },

{ q: "She prefers coffee than tea.", o: ["prefers","coffee","than","tea"], a: 2 },
{ q: "He is good on mathematics.", o: ["good","on","mathematics",""], a: 1 },
{ q: "She is very much beautiful.", o: ["very","much","beautiful",""], a: 1 },
{ q: "I have passed the exam last year.", o: ["have","passed","last","year"], a: 0 },
{ q: "He is doing a lot of mistakes.", o: ["lot","of","mistakes",""], a: 2 },

{ q: "She is going school daily.", o: ["going","school","daily",""], a: 1 },
{ q: "He did not finish his work yet.", o: ["did","not","finish","yet"], a: 3 },
{ q: "She speaks English very fluent.", o: ["very","fluent","English",""], a: 1 },
{ q: "He is not able for do this work.", o: ["able","for","do","work"], a: 1 },
{ q: "I am agree to your suggestion.", o: ["am","agree","to","suggestion"], a: 1 },
    { q:"Find error: They is coming now.", o:["They","is","coming","now"], a:1 },
    ],
    cloze: [
      { q: "I have been waiting ___ morning.", o: ["since", "for", "from", "by"], a: 0 },
       { q:"Find error: He don't like milk.", o:["He","don't","like","milk"], a:1 },
    { q:"Find error: She go to school daily.", o:["She","go","to","school"], a:1 },
    { q: "The sun rises in the ___", o: ["west", "east", "north", "south"], a: 1 },
{ q: "Water freezes at ___ degrees Celsius", o: ["0", "100", "32", "50"], a: 0 },
{ q: "The capital of India is ___", o: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], a: 1 },
{ q: "The opposite of 'hot' is ___", o: ["cold", "warm", "boiling", "sunny"], a: 0 },
{ q: "A person who teaches in a school is called ___", o: ["doctor", "teacher", "engineer", "nurse"], a: 1 },
{ q: "The largest planet in our solar system is ___", o: ["Earth", "Jupiter", "Mars", "Venus"], a: 1 },
{ q: "The color of the sky is usually ___", o: ["green", "blue", "red", "yellow"], a: 1 },
{ q: "We get milk from ___", o: ["cow", "dog", "cat", "sheep"], a: 0 },
{ q: "Birds have ___", o: ["wings", "fins", "legs", "ears"], a: 0 },
{ q: "The day after Monday is ___", o: ["Tuesday", "Sunday", "Friday", "Wednesday"], a: 0 },
{ q: "The human heart has ___ chambers", o: ["2", "3", "4", "5"], a: 2 },
{ q: "The fastest land animal is ___", o: ["Lion", "Cheetah", "Tiger", "Leopard"], a: 1 },
{ q: "The capital of France is ___", o: ["Berlin", "Paris", "Rome", "Madrid"], a: 1 },
{ q: "An adult human has ___ teeth", o: ["28", "30", "32", "34"], a: 2 },
{ q: "The chemical symbol of water is ___", o: ["H2O", "O2", "CO2", "NaCl"], a: 0 },
{ q: "The largest mammal in the world is ___", o: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], a: 1 },
{ q: "The process of plants making food is called ___", o: ["Respiration", "Photosynthesis", "Digestion", "Evaporation"], a: 1 },
{ q: "The smallest planet in our solar system is ___", o: ["Mercury", "Venus", "Mars", "Pluto"], a: 0 },
{ q: "The opposite of 'light' is ___", o: ["heavy", "bright", "soft", "dark"], a: 3 },
{ q: "The main source of energy for Earth is ___", o: ["Moon", "Sun", "Stars", "Wind"], a: 1 },
{ q: "A triangle has ___ sides", o: ["3", "4", "5", "6"], a: 0 },
{ q: "The first president of India was ___", o: ["Jawaharlal Nehru", "Rajendra Prasad", "S. Radhakrishnan", "Indira Gandhi"], a: 1 },
{ q: "The chemical symbol of sodium is ___", o: ["Na", "S", "K", "N"], a: 0 },
{ q: "The fastest bird in the world is ___", o: ["Eagle", "Peregrine Falcon", "Ostrich", "Sparrow"], a: 1 },
{ q: "The largest desert in the world is ___", o: ["Sahara", "Gobi", "Thar", "Kalahari"], a: 0 },
{ q: "Water boils at ___ degrees Celsius", o: ["90", "100", "80", "120"], a: 1 },
{ q: "The national animal of India is ___", o: ["Lion", "Tiger", "Elephant", "Peacock"], a: 1 },
{ q: "The capital of Japan is ___", o: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"], a: 0 },
{ q: "The natural satellite of Earth is ___", o: ["Moon", "Sun", "Mars", "Venus"], a: 0 },
{ q: "The largest ocean in the world is ___", o: ["Atlantic", "Indian", "Pacific", "Arctic"], a: 2 },
{ q: "The opposite of 'happy' is ___", o: ["sad", "angry", "tired", "excited"], a: 0 },
{ q: "An adult human has ___ bones", o: ["206", "208", "201", "210"], a: 0 },
{ q: "The chemical symbol of gold is ___", o: ["Au", "Ag", "Gd", "Go"], a: 0 },
{ q: "The largest continent in the world is ___", o: ["Africa", "Asia", "Europe", "Australia"], a: 1 },
{ q: "The fastest fish in the ocean is ___", o: ["Shark", "Sailfish", "Tuna", "Marlin"], a: 1 },
{ q: "The boiling point of water at sea level is ___ Celsius", o: ["90", "100", "110", "95"], a: 1 },
{ q: "The first man on the moon was ___", o: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"], a: 0 },
    { q:"Find error: They is coming now.", o:["They","is","coming","now"], a:1 },
    { q: "The capital of England is ___", o: ["London", "Manchester", "Liverpool", "Birmingham"], a: 0 },
{ q: "The largest planet in our solar system is ___", o: ["Jupiter", "Saturn", "Mars", "Earth"], a: 0 },
{ q: "The color of an emerald is ___", o: ["Red", "Green", "Blue", "Yellow"], a: 1 },
{ q: "The process by which plants make food is called ___", o: ["Photosynthesis", "Respiration", "Digestion", "Evaporation"], a: 0 },
{ q: "Water covers approximately ___% of Earth's surface", o: ["50", "60", "70", "80"], a: 2 },
{ q: "The national fruit of India is ___", o: ["Mango", "Apple", "Banana", "Grapes"], a: 0 },
{ q: "The fastest land animal is ___", o: ["Cheetah", "Lion", "Tiger", "Leopard"], a: 0 },
{ q: "The main gas in the air we breathe is ___", o: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], a: 1 },
{ q: "The opposite of 'up' is ___", o: ["Down", "Left", "Right", "Backward"], a: 0 },
{ q: "The planet closest to the Sun is ___", o: ["Venus", "Mercury", "Earth", "Mars"], a: 1 },
    ]
 
  },


  medium: {
    grammar: [
      { q: "Neither of the boys ___ present.", o: ["are", "were", "is", "have"], a: 2 },
       { q:"Neither of the boys ___ present.", o:["are","were","is","have"], a:2 },
    { q:"Each of the players ___ a prize.", o:["get","gets","have","are"], a:1 },
    { q:"She prefers tea ___ coffee.", o:["than","to","over","with"], a:1 },
{ q: "He ____ to school every day.", o: ["go","goes","went","gone"], a: 1 },
{ q: "She ____ her work before sunset.", o: ["finish","finishes","finished","finishing"], a: 2 },
{ q: "They ____ here since morning.", o: ["are","were","have been","had been"], a: 2 },
{ q: "I ____ him yesterday.", o: ["see","saw","seen","seeing"], a: 1 },
{ q: "We ____ dinner when he arrived.", o: ["have","had","were having","are having"], a: 2 },

{ q: "She ____ the movie already.", o: ["watch","watched","has watched","is watching"], a: 2 },
{ q: "They ____ for two hours.", o: ["wait","are waiting","have waited","waited"], a: 2 },
{ q: "He ____ hard these days.", o: ["work","works","is working","worked"], a: 2 },
{ q: "I ____ my homework now.", o: ["do","did","am doing","done"], a: 2 },
{ q: "She ____ here next week.", o: ["comes","came","will come","coming"], a: 2 },

{ q: "We ____ the match tomorrow.", o: ["play","played","will play","playing"], a: 2 },
{ q: "He ____ late last night.", o: ["sleep","slept","sleeping","sleeps"], a: 1 },
{ q: "She ____ since 2020.", o: ["works","worked","has worked","is working"], a: 2 },
{ q: "They ____ the work by evening.", o: ["complete","completed","will complete","completing"], a: 2 },
{ q: "I ____ never such a thing.", o: ["see","saw","have seen","had seen"], a: 2 },

{ q: "He ____ a letter now.", o: ["writes","wrote","is writing","written"], a: 2 },
{ q: "She ____ before I called.", o: ["left","leaves","had left","has left"], a: 2 },
{ q: "We ____ English for five years.", o: ["learn","are learning","have been learning","learned"], a: 2 },
{ q: "They ____ TV when I reached.", o: ["watch","watched","were watching","are watching"], a: 2 },
{ q: "I ____ him tomorrow.", o: ["meet","met","will meet","meeting"], a: 2 },
{ q: "He wrote a letter. (Passive)", o: ["A letter is written","A letter was written","A letter has written","A letter writes"], a: 1 },
{ q: "She cleans the room. (Passive)", o: ["Room is cleaned","Room was cleaned","Room cleaned","Room has cleaned"], a: 0 },
{ q: "They are painting the house. (Passive)", o: ["House is painted","House was painted","House is being painted","House has painted"], a: 2 },
{ q: "He will finish the work. (Passive)", o: ["Work is finished","Work was finished","Work will be finished","Work has finished"], a: 2 },
{ q: "She cooked food. (Passive)", o: ["Food cooks","Food is cooked","Food was cooked","Food has cooked"], a: 2 },

{ q: "The teacher praised him. (Passive)", o: ["He is praised","He was praised","He has praised","He praised"], a: 1 },
{ q: "They had completed the task. (Passive)", o: ["Task completed","Task was completed","Task had been completed","Task has been completed"], a: 2 },
{ q: "He is reading a book. (Passive)", o: ["Book reads","Book was read","Book is being read","Book has read"], a: 2 },
{ q: "She will sing a song. (Passive)", o: ["Song sings","Song was sung","Song will be sung","Song has sung"], a: 2 },
{ q: "Someone stole my bag. (Passive)", o: ["My bag is stolen","My bag was stolen","My bag has stolen","My bag steals"], a: 1 },
{ q: "He said, 'I am busy.'", o: ["He said that he is busy","He said that he was busy","He says that he was busy","He said that I was busy"], a: 1 },
{ q: "She said, 'I have done my work.'", o: ["She said that she has done her work","She said that she had done her work","She says she did her work","She said that I had done"], a: 1 },
{ q: "He said, 'I will help you.'", o: ["He said he will help me","He said he would help me","He says he would help","He said he helps me"], a: 1 },
{ q: "She said to me, 'Do your duty.'", o: ["She advised me to do my duty","She said me do duty","She ordered me doing duty","She told me duty"], a: 0 },
{ q: "He said, 'Can you help me?'", o: ["He asked if I can help him","He asked if I could help him","He said can you help","He asked me help"], a: 1 },

{ q: "She said, 'Where are you going?'", o: ["She asked where I was going","She asked where was I going","She asked where am I going","She said where I was going"], a: 0 },
{ q: "He said, 'Open the door.'", o: ["He ordered to open the door","He ordered me to open the door","He said open door","He told open door"], a: 1 },
{ q: "She said, 'Alas! I am ruined.'", o: ["She exclaimed sadly that she was ruined","She said she is ruined","She exclaimed that I am ruined","She said alas"], a: 0 },
{ q: "He said, 'Let us go out.'", o: ["He proposed that we should go out","He ordered go out","He said to go out","He asked go out"], a: 0 },
{ q: "She said, 'Please help me.'", o: ["She ordered me help","She requested me to help her","She asked help me","She said please"], a: 1 },
{ q: "He is ____ honest man.", o: ["a","an","the","no article"], a: 1 },
{ q: "She bought ____ umbrella.", o: ["a","an","the","no article"], a: 1 },
{ q: "____ sun rises in the east.", o: ["A","An","The","No article"], a: 2 },
{ q: "He is ____ best player.", o: ["a","an","the","no article"], a: 2 },
{ q: "I saw ____ elephant.", o: ["a","an","the","no article"], a: 1 },

{ q: "She is ____ university student.", o: ["a","an","the","no article"], a: 0 },
{ q: "He lives on ____ first floor.", o: ["a","an","the","no article"], a: 2 },
{ q: "____ Ganga is a holy river.", o: ["A","An","The","No article"], a: 2 },
{ q: "I need ____ pen.", o: ["a","an","the","no article"], a: 0 },
{ q: "She speaks ____ English.", o: ["a","an","the","no article"], a: 3 },
{ q: "He is fond ____ music.", o: ["of","in","on","at"], a: 0 },
{ q: "She is afraid ____ dogs.", o: ["from","of","with","by"], a: 1 },
{ q: "The book is ____ the table.", o: ["in","on","at","under"], a: 1 },
{ q: "He was absent ____ class.", o: ["from","to","in","at"], a: 0 },
{ q: "She is good ____ math.", o: ["in","at","on","for"], a: 1 },

{ q: "He went ____ the market.", o: ["to","in","on","at"], a: 0 },
{ q: "The cat jumped ____ the wall.", o: ["on","over","in","at"], a: 1 },
{ q: "She is angry ____ me.", o: ["with","on","at","from"], a: 0 },
{ q: "He is interested ____ sports.", o: ["on","in","at","with"], a: 1 },
{ q: "I agree ____ you.", o: ["to","with","on","for"], a: 1 },
{ q: "He do not like tea.", o: ["do","does","did","done"], a: 1 },
{ q: "She has ____ her work.", o: ["finish","finished","finishing","finishes"], a: 1 },
{ q: "Neither of the boys ____ present.", o: ["are","were","is","have"], a: 2 },
{ q: "He is senior ____ me.", o: ["than","to","from","with"], a: 1 },
{ q: "She is as ____ as her sister.", o: ["tall","taller","tallest","more tall"], a: 0 },

{ q: "One of the students ____ absent.", o: ["are","were","is","have"], a: 2 },
{ q: "He prefers tea ____ coffee.", o: ["than","to","over","from"], a: 1 },
{ q: "She did not ____ me.", o: ["saw","seen","see","seeing"], a: 2 },
{ q: "He is good ____ English.", o: ["in","at","on","with"], a: 1 },
{ q: "Each of the boys ____ rewarded.", o: ["are","were","is","have"], a: 2 },

    ],
    vocab: [
      { q: "Antonym of 'Scarce'?", o: ["Rare", "Plenty", "Few", "Short"], a: 1 },
       { q:"Antonym of 'Scarce'?", o:["Rare","Plenty","Few","Short"], a:1 },
    { q:"Meaning of 'Cautious'?", o:["Careful","Careless","Fast","Rude"], a:0 },
{ q: "Synonym of 'Abundant'?", o: ["Scarce","Plentiful","Little","Rare"], a: 1 },
{ q: "Synonym of 'Brief'?", o: ["Short","Long","Wide","Large"], a: 0 },
{ q: "Synonym of 'Cautious'?", o: ["Careless","Alert","Lazy","Foolish"], a: 1 },
{ q: "Synonym of 'Dull'?", o: ["Bright","Boring","Sharp","Smart"], a: 1 },
{ q: "Synonym of 'Eager'?", o: ["Unwilling","Interested","Lazy","Slow"], a: 1 },
{ q: "Synonym of 'Fragile'?", o: ["Strong","Breakable","Hard","Solid"], a: 1 },
{ q: "Synonym of 'Genuine'?", o: ["Fake","Real","False","Duplicate"], a: 1 },
{ q: "Synonym of 'Hostile'?", o: ["Friendly","Aggressive","Kind","Calm"], a: 1 },
{ q: "Synonym of 'Idle'?", o: ["Busy","Lazy","Active","Working"], a: 1 },
{ q: "Synonym of 'Jealous'?", o: ["Envious","Happy","Proud","Calm"], a: 0 },

{ q: "Synonym of 'Keen'?", o: ["Sharp","Dull","Slow","Lazy"], a: 0 },
{ q: "Synonym of 'Lethal'?", o: ["Harmless","Deadly","Safe","Mild"], a: 1 },
{ q: "Synonym of 'Modest'?", o: ["Humble","Proud","Arrogant","Rude"], a: 0 },
{ q: "Synonym of 'Neglect'?", o: ["Ignore","Care","Protect","Help"], a: 0 },
{ q: "Synonym of 'Obsolete'?", o: ["Modern","Outdated","Useful","New"], a: 1 },
{ q: "Synonym of 'Peculiar'?", o: ["Strange","Normal","Common","Usual"], a: 0 },
{ q: "Synonym of 'Quit'?", o: ["Continue","Stop","Begin","Start"], a: 1 },
{ q: "Synonym of 'Rapid'?", o: ["Fast","Slow","Lazy","Weak"], a: 0 },
{ q: "Synonym of 'Scarce'?", o: ["Rare","Plenty","Enough","Much"], a: 0 },
{ q: "Synonym of 'Timid'?", o: ["Bold","Shy","Brave","Strong"], a: 1 },

{ q: "Synonym of 'Ultimate'?", o: ["Final","First","Early","Middle"], a: 0 },
{ q: "Synonym of 'Vague'?", o: ["Clear","Unclear","Sharp","Bright"], a: 1 },
{ q: "Synonym of 'Wealthy'?", o: ["Poor","Rich","Hungry","Weak"], a: 1 },
{ q: "Synonym of 'Yield'?", o: ["Produce","Destroy","Waste","Lose"], a: 0 },
{ q: "Synonym of 'Zeal'?", o: ["Fear","Enthusiasm","Anger","Hate"], a: 1 },
{ q: "Synonym of 'Assist'?", o: ["Help","Harm","Stop","Refuse"], a: 0 },
{ q: "Synonym of 'Ban'?", o: ["Allow","Prohibit","Accept","Permit"], a: 1 },
{ q: "Synonym of 'Conceal'?", o: ["Hide","Show","Open","Reveal"], a: 0 },
{ q: "Synonym of 'Decline'?", o: ["Increase","Refuse","Accept","Grow"], a: 1 },
{ q: "Synonym of 'Endure'?", o: ["Suffer","Escape","Avoid","Enjoy"], a: 0 },

{ q: "Synonym of 'Famous'?", o: ["Known","Unknown","Hidden","Secret"], a: 0 },
{ q: "Synonym of 'Grateful'?", o: ["Thankful","Angry","Rude","Sad"], a: 0 },
{ q: "Synonym of 'Harsh'?", o: ["Rough","Soft","Kind","Mild"], a: 0 },
{ q: "Synonym of 'Inevitable'?", o: ["Avoidable","Certain","Possible","Optional"], a: 1 },
{ q: "Synonym of 'Just'?", o: ["Fair","Unfair","Cruel","Biased"], a: 0 },
{ q: "Synonym of 'Knowledgeable'?", o: ["Ignorant","Wise","Foolish","Lazy"], a: 1 },
{ q: "Synonym of 'Loyal'?", o: ["Faithful","Cheater","Enemy","Rude"], a: 0 },
{ q: "Synonym of 'Narrow'?", o: ["Wide","Thin","Broad","Large"], a: 1 },
{ q: "Synonym of 'Oppose'?", o: ["Support","Resist","Help","Join"], a: 1 },
{ q: "Synonym of 'Permit'?", o: ["Allow","Deny","Refuse","Ban"], a: 0 },

{ q: "Synonym of 'Reject'?", o: ["Accept","Refuse","Approve","Allow"], a: 1 },
{ q: "Synonym of 'Severe'?", o: ["Strict","Mild","Soft","Gentle"], a: 0 },
{ q: "Synonym of 'Temporary'?", o: ["Permanent","Short-term","Lasting","Fixed"], a: 1 },
{ q: "Synonym of 'Valuable'?", o: ["Worthless","Precious","Cheap","Useless"], a: 1 },
{ q: "Synonym of 'Witness'?", o: ["Observer","Criminal","Judge","Lawyer"], a: 0 },
{ q: "Synonym of 'Accurate'?", o: ["Exact","Wrong","False","Guess"], a: 0 },
{ q: "Synonym of 'Bold'?", o: ["Brave","Coward","Fearful","Shy"], a: 0 },
{ q: "Synonym of 'Calamity'?", o: ["Disaster","Benefit","Joy","Luck"], a: 0 },
{ q: "Synonym of 'Evident'?", o: ["Clear","Hidden","Secret","Unknown"], a: 0 },
{ q: "Synonym of 'Flexible'?", o: ["Rigid","Bendable","Hard","Fixed"], a: 1 },
{ q: "Antonym of 'Abundant'?", o: ["Plenty","Scarce","Enough","More"], a: 1 },
{ q: "Antonym of 'Ancient'?", o: ["Old","Modern","Past","Aged"], a: 1 },
{ q: "Antonym of 'Brave'?", o: ["Fearless","Coward","Bold","Hero"], a: 1 },
{ q: "Antonym of 'Careful'?", o: ["Cautious","Careless","Alert","Wise"], a: 1 },
{ q: "Antonym of 'Cheap'?", o: ["Low","Costly","Free","Small"], a: 1 },

{ q: "Antonym of 'Difficult'?", o: ["Easy","Hard","Tough","Complex"], a: 0 },
{ q: "Antonym of 'Expand'?", o: ["Grow","Contract","Increase","Develop"], a: 1 },
{ q: "Antonym of 'Fertile'?", o: ["Productive","Barren","Green","Rich"], a: 1 },
{ q: "Antonym of 'Generous'?", o: ["Kind","Stingy","Helpful","Nice"], a: 1 },
{ q: "Antonym of 'Honest'?", o: ["True","Dishonest","Loyal","Fair"], a: 1 },

{ q: "Antonym of 'Import'?", o: ["Buy","Export","Bring","Carry"], a: 1 },
{ q: "Antonym of 'Joyful'?", o: ["Happy","Sad","Cheerful","Glad"], a: 1 },
{ q: "Antonym of 'Kind'?", o: ["Cruel","Nice","Gentle","Soft"], a: 0 },
{ q: "Antonym of 'Loose'?", o: ["Free","Tight","Open","Wide"], a: 1 },
{ q: "Antonym of 'Major'?", o: ["Important","Minor","Big","Large"], a: 1 },

{ q: "Antonym of 'Narrow'?", o: ["Small","Wide","Thin","Little"], a: 1 },
{ q: "Antonym of 'Obey'?", o: ["Follow","Disobey","Accept","Agree"], a: 1 },
{ q: "Antonym of 'Permanent'?", o: ["Lasting","Temporary","Fixed","Stable"], a: 1 },
{ q: "Antonym of 'Quiet'?", o: ["Silent","Noisy","Calm","Soft"], a: 1 },
{ q: "Antonym of 'Reward'?", o: ["Prize","Punishment","Gift","Benefit"], a: 1 },

{ q: "Antonym of 'Sharp'?", o: ["Pointed","Dull","Clear","Bright"], a: 1 },
{ q: "Antonym of 'Thick'?", o: ["Dense","Thin","Heavy","Strong"], a: 1 },
{ q: "Antonym of 'Unity'?", o: ["Union","Division","Together","Join"], a: 1 },
{ q: "Antonym of 'Victory'?", o: ["Win","Defeat","Success","Prize"], a: 1 },
{ q: "Antonym of 'Wise'?", o: ["Clever","Foolish","Smart","Intelligent"], a: 1 },
{ q: "One word for 'One who cannot read or write'?", o: ["Scholar","Illiterate","Writer","Teacher"], a: 1 },
{ q: "One word for 'A person who loves mankind'?", o: ["Philanthropist","Miser","Selfish","Enemy"], a: 0 },
{ q: "One word for 'A place where dead bodies are kept'?", o: ["Museum","Mortuary","Hospital","Jail"], a: 1 },
{ q: "One word for 'One who speaks many languages'?", o: ["Speaker","Linguist","Teacher","Author"], a: 1 },
{ q: "One word for 'Life story written by oneself'?", o: ["Biography","Autobiography","Story","Novel"], a: 1 },

{ q: "Meaning of 'Amiable'?", o: ["Friendly","Angry","Rude","Harsh"], a: 0 },
{ q: "Meaning of 'Hostile'?", o: ["Friendly","Enemy-like","Kind","Helpful"], a: 1 },
{ q: "Meaning of 'Brief'?", o: ["Long","Short","Wide","Big"], a: 1 },
{ q: "Meaning of 'Courage'?", o: ["Fear","Bravery","Weakness","Anger"], a: 1 },
{ q: "Meaning of 'Decline'?", o: ["Increase","Refuse","Grow","Expand"], a: 1 },

{ q: "Correct spelling?", o: ["Occassion","Occasion","Ocassion","Occassion"], a: 1 },
{ q: "Correct spelling?", o: ["Accomodation","Accommodation","Acommodation","Accomadation"], a: 1 },
{ q: "Correct spelling?", o: ["Definately","Definitely","Definetely","Definatly"], a: 1 },
{ q: "Correct spelling?", o: ["Enviroment","Environment","Envirment","Enviornment"], a: 1 },
{ q: "Correct spelling?", o: ["Responsiblity","Responsibility","Responsibilty","Responsiblity"], a: 1 },

    { q:"Synonym of 'Rapid'?", o:["Slow","Fast","Weak","Late"], a:1 },
    ],
    error: [
      { q: "Find error: She did not went there.", o: ["did", "not", "went", "there"], a: 2 },
      { q:"Find error: She did not went there.", o:["did","not","went","there"], a:2 },
{ q: "No sooner did he reached the station than the train left.", o: ["No sooner","did","reached","station"], a: 2 },
{ q: "He is one of the best players who has played this game.", o: ["one of","best","has","played"], a: 2 },
{ q: "She is more intelligent than any girl in the class.", o: ["more","intelligent","than","any"], a: 3 },
{ q: "Each of the students were given a book.", o: ["Each","students","were","given"], a: 2 },
{ q: "Hardly had he entered the room when the phone rings.", o: ["Hardly","had","rings","room"], a: 2 },

{ q: "He is suffering from fever for the last three days.", o: ["suffering","from","for","days"], a: 2 },
{ q: "She has been working here since five years.", o: ["has been","working","since","years"], a: 2 },
{ q: "Neither he nor his friends is present.", o: ["Neither","nor","is","present"], a: 2 },
{ q: "The teacher as well as the students were present.", o: ["as well as","students","were","present"], a: 2 },
{ q: "I prefer walking than cycling.", o: ["prefer","walking","than","cycling"], a: 2 },

{ q: "He behaved very rudely with his parents.", o: ["behaved","very","rudely","with"], a: 1 },
{ q: "The number of students are increasing day by day.", o: ["number","students","are","increasing"], a: 2 },
{ q: "She did not knew why he was angry.", o: ["did","not","knew","angry"], a: 2 },
{ q: "He has been living here from 2015.", o: ["has been","living","from","2015"], a: 2 },
{ q: "She is too weak to walk properly.", o: ["too","weak","to","walk"], a: 0 },

{ q: "Unless you do not work hard, you will fail.", o: ["Unless","do not","work","fail"], a: 1 },
{ q: "He ran fastly to catch the bus.", o: ["ran","fastly","catch","bus"], a: 1 },
{ q: "She ordered for a cup of tea.", o: ["ordered","for","cup","tea"], a: 1 },
{ q: "He is senior to me by two years.", o: ["senior","to","by","years"], a: 2 },
{ q: "I have been knowing him for ten years.", o: ["have been","knowing","for","years"], a: 1 },

{ q: "The boy who you met yesterday is my friend.", o: ["boy","who","you","met"], a: 2 },
{ q: "Scarcely had the match started when it began to rain.", o: ["Scarcely","had","started","rain"], a: 0 },
{ q: "He is confident to pass the exam.", o: ["confident","to","pass","exam"], a: 1 },
{ q: "She denied to accept the offer.", o: ["denied","to","accept","offer"], a: 1 },
{ q: "He has little hopes of success.", o: ["little","hopes","of","success"], a: 1 },

{ q: "The police has arrested the thief.", o: ["police","has","arrested","thief"], a: 1 },
{ q: "She explained me the problem.", o: ["explained","me","problem",""], a: 1 },
{ q: "He insisted to go there alone.", o: ["insisted","to","go","alone"], a: 1 },
{ q: "I wish I was a bird.", o: ["wish","was","bird",""], a: 1 },
{ q: "He is accustomed with hard work.", o: ["accustomed","with","hard","work"], a: 1 },

{ q: "She did not pay attention on her studies.", o: ["pay","attention","on","studies"], a: 2 },
{ q: "The manager along with his staff were present.", o: ["along with","staff","were","present"], a: 2 },
{ q: "He is afraid from dogs.", o: ["afraid","from","dogs",""], a: 1 },
{ q: "She is confident of success in the exam.", o: ["confident","of","success","exam"], a: 0 },
{ q: "He has not returned back yet.", o: ["returned","back","yet",""], a: 1 },

{ q: "He is not only intelligent but also works hard.", o: ["not only","but also","works","hard"], a: 2 },
{ q: "The reason of his failure is unknown.", o: ["reason","of","failure",""], a: 1 },
{ q: "She prefers coffee more than tea.", o: ["prefers","more","than","tea"], a: 1 },
{ q: "He is slow learner.", o: ["slow","learner","",""], a: 0 },

{ q: "He as well as his friends were invited to the party.", o: ["as well as","his friends","were","invited"], a: 2 },
{ q: "Neither of the two answers are correct.", o: ["Neither","two","are","correct"], a: 2 },
{ q: "The quality of the mangoes were not good.", o: ["quality","of","were","good"], a: 2 },
{ q: "He has been working hard since he is a child.", o: ["has been","working","since","is"], a: 3 },
{ q: "She is one of the girls who has won the prize.", o: ["one of","girls","has","won"], a: 2 },

{ q: "Bread and butter are his daily breakfast.", o: ["Bread","butter","are","breakfast"], a: 2 },
{ q: "He has not only completed the work but also submitting the report.", o: ["not only","completed","but also","submitting"], a: 3 },
{ q: "The teacher told that the earth revolves round the sun.", o: ["told","that","revolves","round"], a: 0 },
{ q: "I would rather stay here than to go outside.", o: ["would rather","stay","than","to go"], a: 3 },
{ q: "No sooner had he finished his work when he went out.", o: ["No sooner","had","when","went"], a: 2 },

{ q: "He is superior than his colleagues in experience.", o: ["superior","than","colleagues","experience"], a: 1 },
{ q: "She is fond to listening music.", o: ["fond","to","listening","music"], a: 1 },
{ q: "The committee have taken a final decision.", o: ["committee","have","taken","decision"], a: 1 },
{ q: "He did not succeed because of he was careless.", o: ["because","of","he","careless"], a: 1 },
{ q: "She hardly works these days.", o: ["hardly","works","these","days"], a: 1 },

{ q: "The police were informed about the incident.", o: ["police","were","about","incident"], a: 0 },
{ q: "He is capable to solve this problem.", o: ["capable","to","solve","problem"], a: 1 },
{ q: "She suggested me to apply for the job.", o: ["suggested","me","to apply","job"], a: 1 },
{ q: "He has been absent since last Monday.", o: ["has been","absent","since","Monday"], a: 0 },
{ q: "I will let you to know the result soon.", o: ["will let","you","to know","result"], a: 2 },

{ q: "The scenery of this place are very beautiful.", o: ["scenery","of","are","beautiful"], a: 2 },
{ q: "She has no any objection to my proposal.", o: ["no","any","objection","proposal"], a: 1 },
{ q: "He is busy in preparing for the exam.", o: ["busy","in","preparing","exam"], a: 1 },
{ q: "She is more smarter than her sister.", o: ["more","smarter","than","sister"], a: 0 },
{ q: "The man who you are talking is my uncle.", o: ["man","who","you","talking"], a: 3 },

{ q: "He has been waiting here from two hours.", o: ["has been","waiting","from","hours"], a: 2 },
{ q: "She cannot cope up with the pressure.", o: ["cope","up","with","pressure"], a: 1 },
{ q: "He insisted on to go there.", o: ["insisted","on","to go","there"], a: 2 },
{ q: "I prefer tea over than coffee.", o: ["prefer","over","than","coffee"], a: 2 },
{ q: "She is married with a government officer.", o: ["married","with","government","officer"], a: 1 },

{ q: "He has a good command over English language.", o: ["command","over","English","language"], a: 0 },
{ q: "The child was afraid by the dog.", o: ["afraid","by","the","dog"], a: 1 },
{ q: "She is very keen for learning English.", o: ["keen","for","learning","English"], a: 1 },
{ q: "He succeeded in spite of he was poor.", o: ["in spite","of","he","poor"], a: 1 },
{ q: "She denied to have taken the money.", o: ["denied","to have","taken","money"], a: 1 },

{ q: "I have been seeing him since years.", o: ["have been","seeing","since","years"], a: 1 },
{ q: "The train arrived at the station on time.", o: ["arrived","at","station","time"], a: 0 },
{ q: "He is not interested with politics.", o: ["interested","with","politics",""], a: 1 },
{ q: "She is senior than me in age.", o: ["senior","than","in","age"], a: 1 },
{ q: "He has not yet completed his work till now.", o: ["not yet","completed","till now",""], a: 2 },
{ q: "I look forward to meet you.", o: ["look forward","to","meet","you"], a: 2 },
    { q:"Find error: He has ate the food.", o:["has","ate","the","food"], a:1 },
    ],
    cloze: [
      { q: "He succeeded ___ hard work.", o: ["because", "because of", "due", "by"], a: 1 },
      { q:"He succeeded ___ hard work.", o:["because","because of","due","by"], a:1 },
      { q: "The capital of Australia is ___", o: ["Sydney", "Melbourne", "Canberra", "Perth"], a: 2 },
{ q: "The smallest country in the world is ___", o: ["Monaco", "Vatican City", "Malta", "Liechtenstein"], a: 1 },
{ q: "The chemical symbol of iron is ___", o: ["Fe", "Ir", "I", "In"], a: 0 },
{ q: "The largest organ in the human body is ___", o: ["Heart", "Skin", "Liver", "Brain"], a: 1 },
{ q: "The fastest mammal in the water is ___", o: ["Dolphin", "Sailfish", "Orca", "Shark"], a: 0 },
{ q: "The opposite of 'Generous' is ___", o: ["Kind", "Stingy", "Friendly", "Helpful"], a: 1 },
{ q: "The longest river in the world is ___", o: ["Amazon", "Nile", "Yangtze", "Mississippi"], a: 1 },
{ q: "The highest mountain in the world is ___", o: ["K2", "Everest", "Kangchenjunga", "Lhotse"], a: 1 },
{ q: "The chemical symbol of silver is ___", o: ["Au", "Ag", "Si", "S"], a: 1 },
{ q: "The national flower of India is ___", o: ["Rose", "Lotus", "Marigold", "Tulip"], a: 1 },
{ q: "The capital of Canada is ___", o: ["Toronto", "Vancouver", "Ottawa", "Montreal"], a: 2 },
{ q: "The main gas found in the Earth's atmosphere is ___", o: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], a: 1 },
{ q: "The smallest bone in the human body is ___", o: ["Stapes", "Femur", "Tibia", "Humerus"], a: 0 },
{ q: "The capital of Brazil is ___", o: ["Rio de Janeiro", "Brasilia", "Sao Paulo", "Salvador"], a: 1 },
{ q: "The distance around a circle is called its ___", o: ["Radius", "Diameter", "Circumference", "Area"], a: 2 },
{ q: "The process by which plants release water vapor is ___", o: ["Transpiration", "Respiration", "Photosynthesis", "Evaporation"], a: 0 },
{ q: "The first man to step on the moon was ___", o: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"], a: 1 },
{ q: "The organ responsible for pumping blood is ___", o: ["Lungs", "Heart", "Kidney", "Liver"], a: 1 },
{ q: "The chemical formula for table salt is ___", o: ["NaCl", "KCl", "Na2SO4", "MgCl2"], a: 0 },
{ q: "The first woman Prime Minister of India was ___", o: ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil", "Sarojini Naidu"], a: 0 },
    { q:"She insisted ___ going alone.", o:["in","on","for","to"], a:1 },
    { q: "The chemical symbol of potassium is ___", o: ["K", "P", "Pt", "Po"], a: 0 },
{ q: "The first successful vaccine was developed for ___", o: ["Smallpox", "Polio", "Malaria", "Tuberculosis"], a: 0 },
{ q: "The speed of light in vacuum is approximately ___ km/s", o: ["3,00,000", "1,50,000", "2,00,000", "2,50,000"], a: 0 },
{ q: "The instrument used to measure atmospheric pressure is called ___", o: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"], a: 1 },
{ q: "The largest internal organ in the human body is ___", o: ["Heart", "Liver", "Lungs", "Kidney"], a: 1 },
{ q: "The fastest terrestrial mammal is ___", o: ["Cheetah", "Lion", "Tiger", "Leopard"], a: 0 },
{ q: "The study of earthquakes is called ___", o: ["Volcanology", "Seismology", "Meteorology", "Geology"], a: 1 },
{ q: "The hardest natural substance on Earth is ___", o: ["Gold", "Iron", "Diamond", "Quartz"], a: 2 },
{ q: "The first man to travel into space was ___", o: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"], a: 1 },
{ q: "The national bird of India is ___", o: ["Peacock", "Eagle", "Sparrow", "Parrot"], a: 0 },
{ q: "The chemical symbol of helium is ___", o: ["He", "H", "Hm", "Hy"], a: 0 },
{ q: "The process by which plants make food is called ___", o: ["Respiration", "Photosynthesis", "Transpiration", "Evaporation"], a: 1 },
{ q: "The largest planet in our solar system is ___", o: ["Earth", "Mars", "Jupiter", "Venus"], a: 2 },
{ q: "The first Prime Minister of India was ___", o: ["Jawaharlal Nehru", "Indira Gandhi", "Rajendra Prasad", "S. Radhakrishnan"], a: 0 },
{ q: "The chemical formula of carbon dioxide is ___", o: ["CO", "CO2", "C2O", "CH4"], a: 1 },
{ q: "The organ responsible for filtering blood in the human body is ___", o: ["Heart", "Kidney", "Liver", "Lungs"], a: 1 },
{ q: "The highest waterfall in the world is ___", o: ["Niagara", "Victoria", "Angel", "Iguazu"], a: 2 },
{ q: "The largest desert in the world is ___", o: ["Sahara", "Gobi", "Kalahari", "Arabian"], a: 0 },
{ q: "The boiling point of water at sea level is ___ Celsius", o: ["90", "100", "110", "120"], a: 1 },
{ q: "The currency of Japan is ___", o: ["Yen", "Dollar", "Euro", "Rupee"], a: 0 },
{ q: "Which planet is known as the Red Planet?", o: ["Mars", "Venus", "Jupiter", "Saturn"], a: 0 },
{ q: "Which gas do plants absorb from the atmosphere?", o: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], a: 1 },
{ q: "Who invented the telephone?", o: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"], a: 0 },
{ q: "Which is the largest mammal in the world?", o: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], a: 1 },
{ q: "Which element has the atomic number 1?", o: ["Hydrogen", "Helium", "Oxygen", "Carbon"], a: 0 },
{ q: "What is the freezing point of water in Celsius?", o: ["0", "32", "100", "50"], a: 0 },
{ q: "Which continent is known as the Dark Continent?", o: ["Africa", "Asia", "Europe", "Australia"], a: 0 },
{ q: "Who wrote the play 'Romeo and Juliet'?", o: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"], a: 0 },
{ q: "What is the capital of Italy?", o: ["Rome", "Milan", "Venice", "Naples"], a: 0 },
{ q: "Which gas is most abundant in the Earth's atmosphere?", o: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], a: 1 },
{ q: "Which organ pumps blood throughout the human body?", o: ["Lungs", "Heart", "Kidney", "Liver"], a: 1 },
{ q: "Which is the longest river in the world?", o: ["Amazon", "Nile", "Yangtze", "Mississippi"], a: 1 },
{ q: "Who discovered gravity?", o: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], a: 0 },
{ q: "Which planet is known for its rings?", o: ["Jupiter", "Saturn", "Uranus", "Neptune"], a: 1 },
{ q: "Which organ is responsible for filtering blood in the human body?", o: ["Heart", "Kidney", "Liver", "Lungs"], a: 1 },
{ q: "Which is the largest desert on Earth?", o: ["Sahara", "Gobi", "Kalahari", "Arabian"], a: 0 },
{ q: "Which is the largest ocean in the world?", o: ["Atlantic", "Indian", "Pacific", "Arctic"], a: 2 },
{ q: "Which scientist developed the theory of relativity?", o: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], a: 1 },
{ q: "Which is the national bird of India?", o: ["Peacock", "Eagle", "Sparrow", "Parrot"], a: 0 },
{ q: "Which is the first element in the periodic table?", o: ["Hydrogen", "Helium", "Lithium", "Carbon"], a: 0 },

    ]
  },

  hard: {
    grammar: [
      { q: "No sooner had he arrived ___ it started raining.", o: ["when", "than", "then", "as"], a: 1 },
       { q:"No sooner had he arrived ___ it started raining.", o:["when","than","then","as"], a:1 },
    { q:"Hardly had she spoken ___ the bell rang.", o:["than","when","as","then"], a:1 },
{ q: "He as well as his friends ____ invited.", o: ["are","were","is","have"], a: 2 },
{ q: "No sooner did he entered the room than he fainted.", o: ["did he entered","entered","did he enter","than he fainted"], a: 2 },
{ q: "Each of the boys have submitted their homework.", o: ["Each","boys","have submitted","their"], a: 2 },
{ q: "She is one of those girls who is fond of music.", o: ["one","those","is","fond"], a: 2 },
{ q: "Neither the teacher nor the students was present.", o: ["Neither","nor","students","was"], a: 3 },

{ q: "He insisted to pay the bill.", o: ["insisted","to pay","pay","the bill"], a: 2 },
{ q: "Hardly had I reached the station when the train left.", o: ["Hardly","had I","when","left"], a: 2 },
{ q: "He is senior than me in age.", o: ["senior","than","me","in age"], a: 1 },
{ q: "The number of students are increasing.", o: ["The number","of students","are","increasing"], a: 2 },
{ q: "I prefer tea than coffee.", o: ["prefer","tea","than","coffee"], a: 2 },

{ q: "She is more smarter than her sister.", o: ["more","smarter","than","sister"], a: 0 },
{ q: "One must do his duty honestly.", o: ["One","must","his","honestly"], a: 2 },
{ q: "He was accused for theft.", o: ["was","accused","for","theft"], a: 2 },
{ q: "She hardly never speaks the truth.", o: ["hardly","never","speaks","truth"], a: 1 },
{ q: "The sceneries of Kashmir are beautiful.", o: ["sceneries","of","are","beautiful"], a: 0 },

{ q: "I am looking forward to meet you.", o: ["looking","forward","to meet","you"], a: 2 },
{ q: "The teacher along with students are going.", o: ["teacher","along with","students","are"], a: 3 },
{ q: "He did not knew the answer.", o: ["did","not","knew","answer"], a: 2 },
{ q: "She is suffering with fever.", o: ["suffering","with","fever",""], a: 1 },
{ q: "He is addicted of drugs.", o: ["addicted","of","drugs",""], a: 1 },
{ q: "He is superior than me.", o: ["superior to me","superior from me","superior over me","no improvement"], a: 0 },
{ q: "She denied to help him.", o: ["denied helping him","denied to help him","denied help","no improvement"], a: 0 },
{ q: "I did not see nothing.", o: ["anything","nothing","something","no improvement"], a: 0 },
{ q: "He is too weak to walk.", o: ["so weak that he cannot walk","very weak to walk","weak enough to walk","no improvement"], a: 0 },
{ q: "She is senior than him.", o: ["senior to him","senior from him","senior over him","no improvement"], a: 0 },

{ q: "He ordered me that I should go.", o: ["ordered me to go","ordered that I go","ordered me go","no improvement"], a: 0 },
{ q: "The train left before I reached.", o: ["had left","left","has left","no improvement"], a: 0 },
{ q: "He works hard lest he should fail.", o: ["so that","lest","unless","no improvement"], a: 3 },
{ q: "She is capable to do this work.", o: ["capable of doing","capable to do","capable for doing","no improvement"], a: 0 },
{ q: "He prevented me to enter.", o: ["prevented me from entering","prevented me to enter","prevented entering","no improvement"], a: 0 },
{ q: "No sooner ____ the bell rung than the students rushed out.", o: ["did","had","has","was"], a: 1 },
{ q: "He behaved as if he ____ the king.", o: ["is","was","were","had been"], a: 2 },
{ q: "Had I known this, I ____ helped you.", o: ["will","would","would have","had"], a: 2 },
{ q: "Scarcely ____ he reached when it started raining.", o: ["did","had","was","has"], a: 1 },
{ q: "He would rather ____ than beg.", o: ["die","died","dying","to die"], a: 0 },

{ q: "The teacher asked who ____ broken the glass.", o: ["has","had","have","was"], a: 1 },
{ q: "She insisted that he ____ the truth.", o: ["speaks","speak","spoke","spoken"], a: 1 },
{ q: "He is not only intelligent ____ hardworking.", o: ["but","also","and","too"], a: 1 },
{ q: "Unless you work hard, you ____ fail.", o: ["will","would","should","may"], a: 0 },
{ q: "The quality of the mangoes ____ good.", o: ["are","were","is","have"], a: 2 },
{ q: "A number of students ____ absent today.", o: ["is","was","are","has"], a: 2 },
{ q: "The number of students ____ increasing.", o: ["are","were","is","have"], a: 2 },
{ q: "Each of the players ____ awarded.", o: ["are","were","is","have"], a: 2 },
{ q: "Neither of the two answers ____ correct.", o: ["are","were","is","have"], a: 2 },

{ q: "Bread and butter ____ his breakfast.", o: ["are","were","is","have"], a: 2 },
{ q: "The captain, along with the players, ____ arrived.", o: ["have","has","are","were"], a: 1 },
{ q: "More than one boy ____ present.", o: ["are","were","is","have"], a: 2 },
{ q: "None of the information ____ useful.", o: ["are","were","is","have"], a: 2 },
{ q: "Politics ____ a difficult subject.", o: ["are","were","is","have"], a: 2 },

{ q: "Mathematics ____ his favorite subject.", o: ["are","were","is","have"], a: 2 },
{ q: "The jury ____ divided in their opinion.", o: ["is","was","are","has"], a: 2 },
{ q: "Ten kilometers ____ a long distance.", o: ["are","were","is","have"], a: 2 },
{ q: "The news ____ shocking.", o: ["are","were","is","have"], a: 2 },
{ q: "Scissors ____ used for cutting.", o: ["is","was","are","has"], a: 2 },
{ q: "You ____ obey your parents.", o: ["can","may","must","might"], a: 2 },
{ q: "He ____ be at home now.", o: ["must","can","should","may"], a: 0 },
{ q: "We ____ hurry, or we will miss the train.", o: ["can","may","must","might"], a: 2 },
{ q: "She ____ speak English fluently.", o: ["can","may","must","ought"], a: 0 },
{ q: "You ____ not smoke here.", o: ["must","need","may","could"], a: 0 },

{ q: "He ____ have taken your book by mistake.", o: ["must","should","can","may"], a: 0 },
{ q: "We ____ respect our elders.", o: ["ought to","can","may","might"], a: 0 },
{ q: "She ____ come tomorrow if she is free.", o: ["must","should","may","ought"], a: 2 },


{ q: "He did not hardly know anyone there.", o: ["did not","hardly","know","anyone"], a: 1 },
{ q: "No less than fifty students has applied.", o: ["No less than","fifty","has","applied"], a: 2 },
{ q: "She is the kind of woman who know what she wants.", o: ["the kind","who","know","wants"], a: 2 },
{ q: "He denied having stole the money.", o: ["denied","having","stole","money"], a: 2 },
{ q: "The committee have decided its course of action.", o: ["committee","have","its","action"], a: 1 },

{ q: "He is more efficient than any man in the office.", o: ["more","efficient","than any","man"], a: 3 },
{ q: "Neither the manager nor his assistants was present.", o: ["Neither","nor","assistants","was"], a: 3 },
{ q: "She is one of the employees who has been promoted.", o: ["one of","employees","who","has"], a: 3 },
{ q: "I prefer staying home rather than to go out.", o: ["prefer","staying","rather than","to go"], a: 3 },
{ q: "The reason why he failed is because he was careless.", o: ["The reason","why","is because","careless"], a: 2 },

{ q: "He insisted that the work is finished today.", o: ["insisted","that","is finished","today"], a: 2 },
{ q: "Hardly had the bell rang when the class started.", o: ["Hardly","had","rang","when"], a: 2 },
{ q: "She is as much intelligent as her brother.", o: ["as much","intelligent","as","brother"], a: 0 },
{ q: "He is acquainted to my father.", o: ["is","acquainted","to","father"], a: 2 },
{ q: "The furniture were damaged during transit.", o: ["furniture","were","damaged","during"], a: 1 },

{ q: "He is too proud to beg.", o: ["so proud that he will not beg","very proud to beg","proud enough to beg","no improvement"], a: 3 },
{ q: "She did not agree with my proposal.", o: ["agree to","agree with","agree on","no improvement"], a: 3 },
{ q: "I look forward to hear from you.", o: ["hearing","to hear","hear","no improvement"], a: 0 },
{ q: "He prevented me to do so.", o: ["from doing so","to do so","doing so","no improvement"], a: 0 },
{ q: "He is not only brave but also he is wise.", o: ["but also wise","and also wise","but wise also","no improvement"], a: 0 },

{ q: "She is senior than me by two years.", o: ["senior to me","senior from me","senior than me","no improvement"], a: 0 },
{ q: "He has been working here since five years.", o: ["for five years","since five years","from five years","no improvement"], a: 0 },
{ q: "I would rather die than begging.", o: ["than beg","than to beg","than begging","no improvement"], a: 0 },
{ q: "She is capable to handle this task.", o: ["capable of handling","capable to handle","capable for handling","no improvement"], a: 0 },
{ q: "He succeeded because of his hard work.", o: ["due to","because","because of","no improvement"], a: 3 },
{ q: "No sooner ____ he arrived than the meeting began.", o: ["did","had","has","was"], a: 1 },
{ q: "He talks as though he ____ everything.", o: ["knows","knew","had known","know"], a: 1 },
{ q: "Had she known the truth, she ____ differently.", o: ["will act","would act","would have acted","had acted"], a: 2 },
{ q: "Scarcely ____ the rain stopped when the sun appeared.", o: ["did","had","has","was"], a: 1 },
{ q: "He would rather ____ at home than go out.", o: ["stay","stayed","staying","to stay"], a: 0 },

{ q: "She insisted that he ____ present.", o: ["is","was","be","being"], a: 2 },
{ q: "The teacher asked who ____ the window.", o: ["breaks","broke","had broken","has broken"], a: 2 },
{ q: "He is not only rich ____ also generous.", o: ["but","and","also","too"], a: 0 },
{ q: "Unless you apologize, I ____ forgive you.", o: ["will not","would not","shall not","may not"], a: 0 },
{ q: "So hard ____ that he fell ill.", o: ["did he work","he worked","worked he","he did work"], a: 0 },
{ q: "He is both intelligent ____ hardworking.", o: ["and","or","but","so"], a: 0 },
{ q: "She neither called ____ sent a message.", o: ["or","nor","and","but"], a: 1 },
{ q: "He not only sang ____ danced.", o: ["and","but also","or","nor"], a: 1 },
{ q: "She likes reading, writing, ____ painting.", o: ["and","or","but","so"], a: 0 },
{ q: "He was tired ____ he continued working.", o: ["because","but","so","and"], a: 1 },

{ q: "Either you apologize ____ leave the room.", o: ["and","or","but","nor"], a: 1 },
{ q: "He studied hard ____ he might succeed.", o: ["so","so that","because","although"], a: 1 },
{ q: "She failed ____ her efforts.", o: ["because","despite","although","since"], a: 1 },
{ q: "He will start ____ you are ready.", o: ["when","unless","though","until"], a: 0 },
{ q: "We will wait ____ you arrive.", o: ["till","since","because","although"], a: 0 },
{ q: "You ____ have told me the truth.", o: ["must","should","may","can"], a: 1 },
{ q: "He ____ swim when he was young.", o: ["can","could","may","might"], a: 1 },
{ q: "If I ____ rich, I would help the poor.", o: ["am","was","were","have been"], a: 2 },
{ q: "If he had worked hard, he ____ passed.", o: ["will have","would have","would","had"], a: 1 },
{ q: "If you heat ice, it ____ melt.", o: ["will","would","shall","may"], a: 0 },
{ q: "Unless you hurry, you ____ be late.", o: ["would","should","will","might"], a: 2 },
{ q: "Had I known this, I ____ acted differently.", o: ["will have","would have","would","had"], a: 1 },

{ q: "If she ____ earlier, she would have caught the bus.", o: ["comes","came","had come","has come"], a: 2 },
{ q: "Provided that he works hard, he ____ succeed.", o: ["would","will","might","should"], a: 1 },
{ q: "But for his help, I ____ failed.", o: ["will","would","would have","had"], a: 2 },
{ q: "If you had informed me, I ____ there.", o: ["will go","would go","would have gone","had gone"], a: 2 },
{ q: "Were I you, I ____ not do this.", o: ["will","would","should","may"], a: 1 },
{ q: "He is addicted ____ drugs.", o: ["to","with","of","for"], a: 0 },
{ q: "She is proud ____ her success.", o: ["of","for","with","on"], a: 0 },
{ q: "He insisted ____ paying the bill.", o: ["to","on","for","with"], a: 1 },
{ q: "She was annoyed ____ his behavior.", o: ["with","by","on","at"], a: 0 },
{ q: "The teacher was angry ____ the student.", o: ["with","on","at","by"], a: 0 },

{ q: "He is responsible ____ the loss.", o: ["to","with","for","of"], a: 2 },
{ q: "She is known ____ her honesty.", o: ["for","to","with","by"], a: 0 },
{ q: "I am not accustomed ____ such food.", o: ["to","with","of","for"], a: 0 },
{ q: "He was charged ____ theft.", o: ["with","for","of","by"], a: 0 },
{ q: "She takes pride ____ her work.", o: ["in","on","at","of"], a: 0 },

{ q: "He said, 'I did it myself.'", o: [
"He said that he had done it himself",
"He said that he did it himself",
"He says he did it himself",
"He said that I had done it myself"
], a: 0 },

{ q: "She said, 'Do you know him?'", o: [
"She asked if I knew him",
"She asked do you know him",
"She asked if I know him",
"She said if I knew him"
], a: 0 },

{ q: "He said to me, 'Don't waste your time.'", o: [
"He advised me not to waste my time",
"He ordered me not waste time",
"He told me waste no time",
"He said not to waste time"
], a: 0 },

{ q: "She said, 'What a beautiful flower!'", o: [
"She exclaimed that the flower was very beautiful",
"She said the flower is beautiful",
"She exclaimed beautiful flower",
"She said what flower"
], a: 0 },

{ q: "The teacher said, 'The earth revolves around the sun.'", o: [
"The teacher said that the earth revolves around the sun",
"The teacher said that the earth revolved around the sun",
"The teacher says earth revolved",
"The teacher said earth revolves"
], a: 0 },

{ q: "He was too tired ____ walk.", o: ["that","to","for","so"], a: 1 },
{ q: "They will have completed the work. (Passive)", o: [
"Work will have been completed",
"Work has been completed",
"Work was completed",
"Work will be completed"
], a: 0 },

{ q: "Someone is repairing my car. (Passive)", o: [
"My car is repaired",
"My car has been repaired",
"My car is being repaired",
"My car was repaired"
], a: 2 },

{ q: "They had been watching the match. (Passive)", o: [
"The match had been watched",
"The match was being watched",
"The match had been being watched",
"The match is watched"
], a: 2 },

{ q: "She must obey the rules. (Passive)", o: [
"Rules must be obeyed",
"Rules are obeyed",
"Rules were obeyed",
"Rules have obeyed"
], a: 0 },

{ q: "He made her cry. (Passive)", o: [
"She was made to cry",
"She was made cry",
"She is made to cry",
"She has been made cry"
], a: 0 },

{ q: "He could not put up with the noise.", o: ["tolerate","create","avoid","remove"], a: 0 },
{ q: "She backed out of the agreement.", o: ["withdrew","accepted","supported","continued"], a: 0 },
{ q: "He went through the document carefully.", o: ["examined","destroyed","ignored","copied"], a: 0 },
{ q: "The plan fell through due to lack of funds.", o: ["failed","succeeded","started","improved"], a: 0 },
{ q: "She looked down upon the poor.", o: ["hated","despised","helped","ignored"], a: 1 },

{ q: "He brought up an important issue.", o: ["raised","ended","ignored","settled"], a: 0 },
{ q: "She ran into an old friend.", o: ["met accidentally","avoided","helped","recognized"], a: 0 },
{ q: "He turned down the offer.", o: ["rejected","accepted","discussed","delayed"], a: 0 },
{ q: "The meeting was called off.", o: ["cancelled","postponed","started","continued"], a: 0 },
{ q: "He made up his mind.", o: ["decided","confused","argued","waited"], a: 0 },
{ q: "He is _____ honest _____ brave.", o: ["both / and","either / or","neither / nor","not only / but"], a: 0 },
{ q: "No sooner _____ he arrived _____ the rain started.", o: ["had / than","did / when","has / then","was / than"], a: 0 },
{ q: "Hardly _____ she finished _____ the guests arrived.", o: ["had / when","did / than","has / when","was / than"], a: 0 },
{ q: "She worked hard _____ she could succeed.", o: ["so that","because","although","unless"], a: 0 },
{ q: "He is _____ clever _____ hardworking.", o: ["not only / but also","either / or","neither / nor","both / or"], a: 0 },

{ q: "Arrange: (A) he failed (B) because (C) he was careless (D) in the exam", 
  o: ["ABCD","BCAD","ACBD","DCBA"], a: 1 },

{ q: "Arrange: (A) had finished (B) she (C) before (D) I arrived", 
  o: ["BACD","BCAD","ABCD","DCBA"], a: 1 },

{ q: "Arrange: (A) will not start (B) the match (C) unless (D) it stops raining", 
  o: ["BACD","BCAD","ABCD","ACBD"], a: 0 },

{ q: "Arrange: (A) no sooner (B) had he (C) reached home (D) than it began to rain", 
  o: ["ABCD","BACD","ACBD","BCAD"], a: 0 },
{ q: "He must be at home. (Meaning?)", 
  o: ["certainty","permission","ability","request"], a: 0 },

{ q: "You should have informed me earlier.", 
  o: ["regret","advice","possibility","order"], a: 0 },

{ q: "She may come today.", 
  o: ["certainty","possibility","obligation","necessity"], a: 1 },

{ q: "He could have won the match.", 
  o: ["lost chance","certainty","order","permission"], a: 0 },

{ q: "You need not worry.", 
  o: ["no necessity","no permission","no advice","no order"], a: 0 },


{ q: "He was elected _____ president.", o: ["a","an","the","no article"], a: 3 },
{ q: "She is _____ M.A. in English.", o: ["a","an","the","no article"], a: 3 },
{ q: "He is _____ European citizen.", o: ["a","an","the","no article"], a: 0 },
{ q: "She plays _____ piano.", o: ["a","an","the","no article"], a: 2 },
{ q: "He goes to office _____ foot.", o: ["by","on","with","in"], a: 1 },

{ q: "She has been ill _____ Monday.", o: ["since","for","from","by"], a: 0 },
{ q: "He is good _____ mathematics.", o: ["in","at","on","with"], a: 1 },
{ q: "She is married _____ a doctor.", o: ["with","to","by","from"], a: 1 },
{ q: "He is angry _____ his brother.", o: ["on","at","with","by"], a: 2 },
{ q: "I have no faith _____ him.", o: ["on","in","at","with"], a: 1 },

    ],
    vocab: [
      { q: "Meaning of 'Obsolete'?", o: ["New", "Outdated", "Useful", "Rare"], a: 1 },
       { q:"Meaning of 'Obsolete'?", o:["New","Outdated","Useful","Rare"], a:1 },
    { q:"Synonym of 'Ubiquitous'?", o:["Rare","Everywhere","Useful","Silent"], a:1 },

{ q: "Synonym of 'Abate'?", o: ["Increase","Reduce","Expand","Strengthen"], a: 1 },
{ q: "Antonym of 'Hostile'?", o: ["Friendly","Angry","Rude","Harsh"], a: 0 },
{ q: "Synonym of 'Candid'?", o: ["Honest","Clever","Shy","Silent"], a: 0 },
{ q: "Antonym of 'Scarce'?", o: ["Rare","Plenty","Few","Less"], a: 1 },
{ q: "Synonym of 'Obsolete'?", o: ["Modern","Outdated","Useful","New"], a: 1 },

{ q: "Antonym of 'Benevolent'?", o: ["Kind","Cruel","Helpful","Generous"], a: 1 },
{ q: "Synonym of 'Prudent'?", o: ["Wise","Foolish","Careless","Rash"], a: 0 },
{ q: "Antonym of 'Rigid'?", o: ["Stiff","Flexible","Hard","Strict"], a: 1 },
{ q: "Synonym of 'Vivid'?", o: ["Clear","Dull","Dark","Weak"], a: 0 },
{ q: "Antonym of 'Reluctant'?", o: ["Unwilling","Eager","Lazy","Shy"], a: 1 },
{ q: "Antonym of 'Reluctant'?", o: ["Unwilling","Eager","Lazy","Shy"], a: 1 },
{ q: "Synonym of 'Obdurate'?", o: ["Stubborn","Flexible","Gentle","Forgiving"], a: 0 },
{ q: "Synonym of 'Recalcitrant'?", o: ["Obedient","Resistant","Agreeable","Submissive"], a: 1 },
{ q: "Synonym of 'Sycophant'?", o: ["Critic","Flatterer","Leader","Rival"], a: 1 },
{ q: "Synonym of 'Inchoate'?", o: ["Fully formed","Rudimentary","Complete","Developed"], a: 1 },
{ q: "Synonym of 'Ephemeral'?", o: ["Eternal","Short-lived","Permanent","Infinite"], a: 1 },
{ q: "Synonym of 'Pernicious'?", o: ["Beneficial","Harmful","Harmless","Favorable"], a: 1 },
{ q: "Synonym of 'Soporific'?", o: ["Stimulating","Sleep-inducing","Exciting","Thrilling"], a: 1 },
{ q: "Synonym of 'Impecunious'?", o: ["Wealthy","Poor","Generous","Lavish"], a: 1 },
{ q: "Synonym of 'Inscrutable'?", o: ["Clear","Mysterious","Transparent","Obvious"], a: 1 },
{ q: "Synonym of 'Munificent'?", o: ["Stingy","Generous","Greedy","Miserly"], a: 1 },
{ q: "Antonym of 'Loquacious'?", o: ["Talkative","Silent","Chatty","Garrulous"], a: 1 },
{ q: "Antonym of 'Ubiquitous'?", o: ["Everywhere","Rare","Common","Omnipresent"], a: 1 },
{ q: "Synonym of 'Obfuscate'?", o: ["Clarify","Confuse","Simplify","Illuminate"], a: 1 },
{ q: "Synonym of 'Abstruse'?", o: ["Simple","Complex","Easy","Plain"], a: 1 },

{ q: "Synonym of 'Eloquent'?", o: ["Fluent","Silent","Angry","Rude"], a: 0 },
{ q: "Antonym of 'Prosperous'?", o: ["Rich","Poor","Wealthy","Strong"], a: 1 },
{ q: "Synonym of 'Frugal'?", o: ["Economical","Wasteful","Rich","Careless"], a: 0 },
{ q: "Antonym of 'Transparent'?", o: ["Clear","Hidden","Obvious","Visible"], a: 1 },
{ q: "Synonym of 'Mitigate'?", o: ["Reduce","Increase","Worsen","Ignore"], a: 0 },

{ q: "Antonym of 'Timid'?", o: ["Cowardly","Bold","Shy","Weak"], a: 1 },
{ q: "Synonym of 'Tedious'?", o: ["Boring","Exciting","Quick","Short"], a: 0 },
{ q: "Antonym of 'Permanent'?", o: ["Lasting","Temporary","Fixed","Stable"], a: 1 },
{ q: "Synonym of 'Plausible'?", o: ["Believable","False","Strange","Impossible"], a: 0 },
{ q: "Antonym of 'Diligent'?", o: ["Hardworking","Lazy","Careful","Active"], a: 1 },

{ q: "Synonym of 'Imminent'?", o: ["Distant","Impending","Late","Past"], a: 1 },
{ q: "Antonym of 'Optimistic'?", o: ["Hopeful","Positive","Pessimistic","Cheerful"], a: 2 },
{ q: "Synonym of 'Hostility'?", o: ["Friendship","Hatred","Love","Peace"], a: 1 },
{ q: "Antonym of 'Ancient'?", o: ["Old","Modern","Past","Historic"], a: 1 },
{ q: "Synonym of 'Amiable'?", o: ["Friendly","Rude","Angry","Cruel"], a: 0 },

{ q: "Antonym of 'Expand'?", o: ["Increase","Grow","Contract","Extend"], a: 2 },
{ q: "Synonym of 'Revoke'?", o: ["Cancel","Approve","Grant","Accept"], a: 0 },
{ q: "Antonym of 'Conceal'?", o: ["Hide","Cover","Reveal","Mask"], a: 2 },
{ q: "Synonym of 'Stern'?", o: ["Strict","Gentle","Soft","Kind"], a: 0 },
{ q: "Antonym of 'Inferior'?", o: ["Lower","Poor","Superior","Bad"], a: 2 },

{ q: "Synonym of 'Baffle'?", o: ["Confuse","Explain","Solve","Clarify"], a: 0 },
{ q: "Antonym of 'Brief'?", o: ["Short","Quick","Long","Tiny"], a: 2 },
{ q: "Synonym of 'Hinder'?", o: ["Obstruct","Help","Support","Aid"], a: 0 },
{ q: "Antonym of 'Legitimate'?", o: ["Legal","Valid","Illegal","Proper"], a: 2 },
{ q: "Synonym of 'Deteriorate'?", o: ["Improve","Decline","Grow","Expand"], a: 1 },

{ q: "Antonym of 'Rigid'?", o: ["Hard","Stiff","Flexible","Firm"], a: 2 },
{ q: "Synonym of 'Obstinate'?", o: ["Stubborn","Flexible","Soft","Kind"], a: 0 },
{ q: "Antonym of 'Generous'?", o: ["Kind","Selfish","Helpful","Friendly"], a: 1 },
{ q: "Synonym of 'Vanish'?", o: ["Disappear","Appear","Stay","Remain"], a: 0 },
{ q: "Antonym of 'Hostile'?", o: ["Friendly","Cruel","Angry","Harsh"], a: 0 },

{ q: "Synonym of 'Precise'?", o: ["Exact","Rough","Loose","Vague"], a: 0 },
{ q: "Antonym of 'Artificial'?", o: ["Fake","False","Natural","Manmade"], a: 2 },
{ q: "Synonym of 'Concur'?", o: ["Agree","Disagree","Reject","Oppose"], a: 0 },
{ q: "Antonym of 'Vulnerable'?", o: ["Weak","Safe","Fragile","Exposed"], a: 1 },
{ q: "Synonym of 'Avert'?", o: ["Prevent","Cause","Create","Encourage"], a: 0 },


    ],
    error: [
      { q: "Each of the students have submitted their work.", o: ["Each", "students", "have", "their"], a: 2 },
      { q:"Each of the students have submitted their work.", o:["Each","students","have","their"], a:2 },
    { q:"One of the boys are absent today.", o:["One","boys","are","absent"], a:2 },

{ q: "No sooner had the teacher entered the class when the students stood up.", o: ["No sooner","had","when","stood"], a: 2 },
{ q: "Hardly had he finished the work than he went out.", o: ["Hardly","had","than","went"], a: 2 },
{ q: "Not only he was late but also missed the train.", o: ["Not only","he","was","missed"], a: 1 },
{ q: "Scarcely had she reached home when it started raining.", o: ["Scarcely","had","when","started"], a: 2 },
{ q: "Little did he knew about the consequences.", o: ["Little","did","knew","about"], a: 2 },

{ q: "He is one of those students who deserves praise.", o: ["one of","those","who","deserves"], a: 3 },
{ q: "The number of candidates appearing in the exam are increasing.", o: ["number","candidates","are","increasing"], a: 2 },
{ q: "The quality of the apples have deteriorated.", o: ["quality","of","have","deteriorated"], a: 2 },
{ q: "Each of the boys were given a prize.", o: ["Each","boys","were","given"], a: 2 },
{ q: "Bread and butter were his only food.", o: ["Bread","butter","were","food"], a: 2 },

{ q: "He behaves as if he knows everything.", o: ["behaves","as if","knows","everything"], a: 2 },
{ q: "She talks as though she was the boss.", o: ["as though","she","was","boss"], a: 2 },
{ q: "If I was you, I would not accept the offer.", o: ["If","was","would","accept"], a: 1 },
{ q: "I wish I was a millionaire.", o: ["wish","was","millionaire",""], a: 1 },
{ q: "Had I knew the truth, I would have acted differently.", o: ["Had","knew","would","acted"], a: 1 },

{ q: "He denied to have broken the window.", o: ["denied","to have","broken","window"], a: 1 },
{ q: "She insisted to completing the work herself.", o: ["insisted","to","completing","herself"], a: 1 },
{ q: "He prevented me from to enter the room.", o: ["prevented","from","to enter","room"], a: 2 },
{ q: "She objected on my proposal.", o: ["objected","on","my","proposal"], a: 1 },
{ q: "He is confident to win the match.", o: ["confident","to","win","match"], a: 1 },

{ q: "The man, along with his sons, are going to the market.", o: ["along with","sons","are","going"], a: 2 },
{ q: "The captain, as well as the players, were praised.", o: ["as well as","players","were","praised"], a: 2 },
{ q: "Either of the two answers are correct.", o: ["Either","two","are","correct"], a: 2 },
{ q: "Neither the teacher nor the students was present.", o: ["Neither","nor","was","present"], a: 2 },
{ q: "Everyone have his own problems.", o: ["Everyone","have","his","problems"], a: 1 },

{ q: "He has been working here since he joined the company.", o: ["has been","working","since","joined"], a: 0 },
{ q: "She has been knowing him for ten years.", o: ["has been","knowing","for","years"], a: 1 },
{ q: "I am looking forward to see you soon.", o: ["looking forward","to","see","soon"], a: 2 },
{ q: "The train arrived to the platform late.", o: ["arrived","to","platform","late"], a: 1 },
{ q: "He has completed the work before two days.", o: ["completed","before","two","days"], a: 1 },

{ q: "She is more cleverer than her sister.", o: ["more","cleverer","than","sister"], a: 0 },
{ q: "This is the most unique opportunity.", o: ["most","unique","opportunity",""], a: 0 },
{ q: "He runs much fasterer than me.", o: ["much","fasterer","than","me"], a: 1 },
{ q: "She is senior than me by age.", o: ["senior","than","by","age"], a: 1 },
{ q: "He returned back again to his village.", o: ["returned","back","again","village"], a: 1 },

{ q: "No sooner had he arrived than he starts complaining.", o: ["No sooner","had","starts","complaining"], a: 2 },
{ q: "Hardly had the bell rang when the students rushed out.", o: ["Hardly","had","rang","rushed"], a: 2 },
{ q: "Not until he finished his work did he allowed to leave.", o: ["Not until","finished","did","allowed"], a: 3 },
{ q: "Little he knew that trouble awaited him.", o: ["Little","he","knew","awaited"], a: 1 },
{ q: "Scarcely the match had begun when it started raining.", o: ["Scarcely","had","begun","raining"], a: 0 },

{ q: "He is one of the officers who has been promoted.", o: ["one of","officers","has","promoted"], a: 2 },
{ q: "The number of vehicles on the road have increased.", o: ["number","vehicles","have","increased"], a: 2 },
{ q: "Each of the players have been rewarded.", o: ["Each","players","have","rewarded"], a: 2 },
{ q: "Bread and butter are considered as healthy food.", o: ["Bread","butter","are","food"], a: 2 },
{ q: "Ten kilometers are a long distance to walk.", o: ["Ten","kilometers","are","distance"], a: 2 },

{ q: "She behaves as if she knows everything.", o: ["behaves","as if","knows","everything"], a: 2 },
{ q: "He spoke as though he was the leader.", o: ["as though","he","was","leader"], a: 2 },
{ q: "If he was careful, he would not make mistakes.", o: ["If","was","would","make"], a: 1 },
{ q: "I wish I knew the answer yesterday.", o: ["wish","knew","answer","yesterday"], a: 0 },
{ q: "Had he worked hard, he would succeed.", o: ["Had","worked","would","succeed"], a: 3 },

{ q: "She insisted to speak to the manager.", o: ["insisted","to","speak","manager"], a: 1 },
{ q: "He prevented her to entering the hall.", o: ["prevented","to","entering","hall"], a: 1 },
{ q: "They objected on the new policy.", o: ["objected","on","new","policy"], a: 1 },
{ q: "He is confident to cracking the exam.", o: ["confident","to","cracking","exam"], a: 1 },
{ q: "She denied to have been involved in the matter.", o: ["denied","to have","been","matter"], a: 1 },

{ q: "The manager, along with his assistants, were present.", o: ["along with","assistants","were","present"], a: 2 },
{ q: "The teacher as well as the students were late.", o: ["as well as","students","were","late"], a: 2 },
{ q: "Either the boys or the teacher were responsible.", o: ["Either","or","were","responsible"], a: 2 },
{ q: "Neither the players nor the coach were blamed.", o: ["Neither","nor","were","blamed"], a: 2 },
{ q: "Everyone know what he should do.", o: ["Everyone","know","what","do"], a: 1 },

{ q: "She has been waiting here from morning.", o: ["has been","waiting","from","morning"], a: 2 },
{ q: "He has completed the course since last year.", o: ["completed","since","last","year"], a: 1 },
{ q: "I am looking forward to hear from you.", o: ["looking forward","to","hear","you"], a: 2 },
{ q: "The train arrived at the platform by time.", o: ["arrived","at","by time",""], a: 2 },
{ q: "He finished the work before two hours.", o: ["finished","before","two","hours"], a: 1 },

{ q: "She is more wiser than her brother.", o: ["more","wiser","than","brother"], a: 0 },
{ q: "This is the very unique chance.", o: ["very","unique","chance",""], a: 0 },
{ q: "He is the most tallest boy in class.", o: ["most","tallest","boy","class"], a: 1 },
{ q: "She is senior than me in rank.", o: ["senior","than","in","rank"], a: 1 },
{ q: "He returned back to home again.", o: ["returned","back","again","home"], a: 1 },

{ q: "No sooner did he reached the office than the meeting started.", o: ["No sooner","did","reached","started"], a: 2 },
{ q: "Hardly had the sun rose when we started our journey.", o: ["Hardly","had","rose","started"], a: 2 },
{ q: "Not only he failed but also he lost confidence.", o: ["Not only","he","failed","lost"], a: 1 },
{ q: "Little did she imagined the result.", o: ["Little","did","imagined","result"], a: 2 },
{ q: "Scarcely had they finished when the rain pours.", o: ["Scarcely","had","pours","rain"], a: 2 },

{ q: "He is one of those men who is always punctual.", o: ["one of","men","is","punctual"], a: 2 },
{ q: "The number of applicants have decreased this year.", o: ["number","applicants","have","decreased"], a: 2 },
{ q: "Each of the candidates were interviewed.", o: ["Each","candidates","were","interviewed"], a: 2 },
{ q: "Bread and butter were his only breakfast.", o: ["Bread","butter","were","breakfast"], a: 2 },
{ q: "Five thousand rupees are a big amount.", o: ["Five thousand","rupees","are","amount"], a: 2 },

{ q: "She behaves as if she know everything.", o: ["behaves","as if","know","everything"], a: 2 },
{ q: "He talks as though he were knowing the truth.", o: ["as though","were","knowing","truth"], a: 2 },
{ q: "If I was in your place, I would resign.", o: ["If","was","would","resign"], a: 1 },
{ q: "I wish I was born rich.", o: ["wish","was","born","rich"], a: 1 },
{ q: "Had he taken advice, he will not suffer.", o: ["Had","taken","will","suffer"], a: 2 },

{ q: "She insisted to pay the bill.", o: ["insisted","to","pay","bill"], a: 1 },
{ q: "He prevented me from enter the room.", o: ["prevented","from","enter","room"], a: 2 },
{ q: "They objected against his decision.", o: ["objected","against","his","decision"], a: 0 },
{ q: "He is confident to success in life.", o: ["confident","to","success","life"], a: 1 },
{ q: "She denied to accept the blame.", o: ["denied","to","accept","blame"], a: 1 },

{ q: "The leader, along with his followers, were arrested.", o: ["along with","followers","were","arrested"], a: 2 },
{ q: "The principal as well as the teachers were present.", o: ["as well as","teachers","were","present"], a: 2 },
{ q: "Either of the answers are acceptable.", o: ["Either","answers","are","acceptable"], a: 2 },
{ q: "Neither the boys nor the girl were selected.", o: ["Neither","nor","were","selected"], a: 2 },
{ q: "Everyone have forgotten their duty.", o: ["Everyone","have","their","duty"], a: 1 },

{ q: "She has been living here from five years.", o: ["has been","living","from","years"], a: 2 },


{ q: "No sooner had he submitted the form when he realized the mistake.", o: ["No sooner","had","when","realized"], a: 2 },
{ q: "Hardly had the guests arrived than the lights went off.", o: ["Hardly","had","than","went"], a: 2 },
{ q: "Not only he ignored the advice but also made matters worse.", o: ["Not only","he","ignored","made"], a: 1 },
{ q: "Little did she realize that danger awaits her.", o: ["Little","did","realize","awaits"], a: 3 },
{ q: "Scarcely had the teacher entered when the bell rings.", o: ["Scarcely","had","rings","bell"], a: 2 },

{ q: "He is one of the athletes who deserves appreciation.", o: ["one of","athletes","who","deserves"], a: 3 },
{ q: "The number of tourists visiting the place have increased.", o: ["number","tourists","have","increased"], a: 2 },
{ q: "Each of the reports were verified carefully.", o: ["Each","reports","were","verified"], a: 2 },
{ q: "Bread and butter were his daily meals.", o: ["Bread","butter","were","meals"], a: 2 },
{ q: "Twenty kilometers are not a short distance.", o: ["Twenty","kilometers","are","distance"], a: 2 },

{ q: "She behaves as if she know the answer.", o: ["behaves","as if","know","answer"], a: 2 },
{ q: "He spoke as though he was knowing everything.", o: ["as though","was","knowing","everything"], a: 2 },
{ q: "If I was informed earlier, I would have acted.", o: ["If","was","would","acted"], a: 1 },
{ q: "I wish I was given a chance.", o: ["wish","was","given","chance"], a: 1 },
{ q: "Had he listened to advice, he will succeed.", o: ["Had","listened","will","succeed"], a: 2 },

{ q: "She insisted to completing the assignment.", o: ["insisted","to","completing","assignment"], a: 1 },
{ q: "He prevented the children to play outside.", o: ["prevented","children","to play","outside"], a: 2 },
{ q: "They objected on his behaviour.", o: ["objected","on","his","behaviour"], a: 1 },
{ q: "He is confident to achieving success.", o: ["confident","to","achieving","success"], a: 1 },
{ q: "She denied to have committed the crime.", o: ["denied","to have","committed","crime"], a: 1 },

{ q: "The chairman, along with his members, were present.", o: ["along with","members","were","present"], a: 2 },
{ q: "The teacher as well as the principal were satisfied.", o: ["as well as","principal","were","satisfied"], a: 2 },
{ q: "Either of the answers are wrong.", o: ["Either","answers","are","wrong"], a: 2 },
{ q: "Neither the manager nor the employees was informed.", o: ["Neither","nor","was","informed"], a: 2 },
{ q: "Everyone know their responsibilities.", o: ["Everyone","know","their","responsibilities"], a: 1 },

{ q: "She has been waiting here from last evening.", o: ["has been","waiting","from","evening"], a: 2 },
{ q: "He has completed the project since last week.", o: ["completed","since","last","week"], a: 1 },
{ q: "I am looking forward to hear the result.", o: ["looking forward","to","hear","result"], a: 2 },
{ q: "The bus arrived to the stop late.", o: ["arrived","to","stop","late"], a: 1 },
{ q: "He finished the work before an hour ago.", o: ["finished","before","ago","hour"], a: 2 },

{ q: "She is more luckier than her sister.", o: ["more","luckier","than","sister"], a: 0 },
{ q: "This is the most unique opportunity available.", o: ["most","unique","opportunity",""], a: 0 },
{ q: "He is the tallest among all students.", o: ["tallest","among","students",""], a: 1 },
{ q: "She is senior than me in qualification.", o: ["senior","than","in","qualification"], a: 1 },
{ q: "He repeated the same error again.", o: ["repeated","same","again",""], a: 3 },
{ q: "He has completed the work since two days.", o: ["completed","since","two","days"], a: 1 },
{ q: "I look forward to receive your reply.", o: ["look forward","to","receive","reply"], a: 2 },
{ q: "The plane arrived to the airport late.", o: ["arrived","to","airport","late"], a: 1 },
{ q: "He finished the exam within two hours ago.", o: ["finished","within","ago","hours"], a: 2 },

{ q: "She is more prettier than her sister.", o: ["more","prettier","than","sister"], a: 0 },
{ q: "This is the most unique invention.", o: ["most","unique","invention",""], a: 0 },
{ q: "He is the tallest among all the boys.", o: ["tallest","among","boys",""], a: 1 },
{ q: "She is senior than me by experience.", o: ["senior","than","by","experience"], a: 1 },
{ q: "He repeated the same mistake again.", o: ["repeated","same","again",""], a: 3 },
    ],
    cloze: [
      { q: "He is junior ___ me.", o: ["than", "to", "from", "by"], a: 1 },
        { q:"He is junior ___ me.", o:["than","to","from","by"], a:1 },
    { q:"She is senior ___ him.", o:["than","to","from","by"], a:1 },
    { q: "The sun rises in the ___.", o: ["west","east","north","south"], a: 1 },
{ q: "Water freezes at ___ degrees Celsius.", o: ["0","100","32","50"], a: 0 },
{ q: "The capital of India is ___.", o: ["Mumbai","New Delhi","Kolkata","Chennai"], a: 1 },
{ q: "The opposite of 'hot' is ___.", o: ["cold","warm","boiling","sunny"], a: 0 },
{ q: "A person who teaches in a school is called ___.", o: ["doctor","teacher","engineer","nurse"], a: 1 },
{ q: "The largest planet in our solar system is ___.", o: ["Earth","Jupiter","Mars","Venus"], a: 1 },
{ q: "The color of the sky is usually ___.", o: ["green","blue","red","yellow"], a: 1 },
{ q: "We get milk from ___.", o: ["cow","dog","cat","sheep"], a: 0 },
{ q: "Birds have ___.", o: ["wings","fins","legs","ears"], a: 0 },
{ q: "The day after Monday is ___.", o: ["Tuesday","Sunday","Friday","Wednesday"], a: 0 },
{ q: "The sun rises in the ___", o: ["west", "east", "north", "south"], a: 1 },
{ q: "Water freezes at ___ degrees Celsius", o: ["0", "100", "32", "50"], a: 0 },
{ q: "The capital of India is ___", o: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], a: 1 },
{ q: "The opposite of 'hot' is ___", o: ["cold", "warm", "boiling", "sunny"], a: 0 },
{ q: "A person who teaches in a school is called ___", o: ["doctor", "teacher", "engineer", "nurse"], a: 1 },
{ q: "The largest planet in our solar system is ___", o: ["Earth", "Jupiter", "Mars", "Venus"], a: 1 },
{ q: "The color of the sky is usually ___", o: ["green", "blue", "red", "yellow"], a: 1 },
{ q: "We get milk from ___", o: ["cow", "dog", "cat", "sheep"], a: 0 },
{ q: "Birds have ___", o: ["wings", "fins", "legs", "ears"], a: 0 },
{ q: "The day after Monday is ___", o: ["Tuesday", "Sunday", "Friday", "Wednesday"], a: 0 },
{ q: "The human heart has ___ chambers", o: ["2", "3", "4", "5"], a: 2 },
{ q: "The fastest land animal is ___", o: ["Lion", "Cheetah", "Tiger", "Leopard"], a: 1 },
{ q: "The capital of France is ___", o: ["Berlin", "Paris", "Rome", "Madrid"], a: 1 },
{ q: "An adult human has ___ teeth", o: ["28", "30", "32", "34"], a: 2 },
{ q: "The chemical symbol of water is ___", o: ["H2O", "O2", "CO2", "NaCl"], a: 0 },
{ q: "The largest mammal in the world is ___", o: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], a: 1 },
{ q: "The process of plants making food is called ___", o: ["Respiration", "Photosynthesis", "Digestion", "Evaporation"], a: 1 },
{ q: "The smallest planet in our solar system is ___", o: ["Mercury", "Venus", "Mars", "Pluto"], a: 0 },
{ q: "The opposite of 'light' is ___", o: ["heavy", "bright", "soft", "dark"], a: 3 },
{ q: "The main source of energy for Earth is ___", o: ["Moon", "Sun", "Stars", "Wind"], a: 1 },
{ q: "A triangle has ___ sides", o: ["3", "4", "5", "6"], a: 0 },
{ q: "The first president of India was ___", o: ["Jawaharlal Nehru", "Rajendra Prasad", "S. Radhakrishnan", "Indira Gandhi"], a: 1 },
{ q: "The chemical symbol of sodium is ___", o: ["Na", "S", "K", "N"], a: 0 },
{ q: "The fastest bird in the world is ___", o: ["Eagle", "Peregrine Falcon", "Ostrich", "Sparrow"], a: 1 },
{ q: "The largest desert in the world is ___", o: ["Sahara", "Gobi", "Thar", "Kalahari"], a: 0 },
{ q: "Water boils at ___ degrees Celsius", o: ["90", "100", "80", "120"], a: 1 },
{ q: "The national animal of India is ___", o: ["Lion", "Tiger", "Elephant", "Peacock"], a: 1 },
{ q: "The capital of Japan is ___", o: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"], a: 0 },
{ q: "The natural satellite of Earth is ___", o: ["Moon", "Sun", "Mars", "Venus"], a: 0 },
{ q: "The largest ocean in the world is ___", o: ["Atlantic", "Indian", "Pacific", "Arctic"], a: 2 },
{ q: "The opposite of 'happy' is ___", o: ["sad", "angry", "tired", "excited"], a: 0 },
{ q: "An adult human has ___ bones", o: ["206", "208", "201", "210"], a: 0 },
{ q: "The chemical symbol of gold is ___", o: ["Au", "Ag", "Gd", "Go"], a: 0 },
{ q: "The largest continent in the world is ___", o: ["Africa", "Asia", "Europe", "Australia"], a: 1 },
{ q: "The fastest fish in the ocean is ___", o: ["Shark", "Sailfish", "Tuna", "Marlin"], a: 1 },
{ q: "The boiling point of water at sea level is ___ Celsius", o: ["90", "100", "110", "95"], a: 1 },

    ],
  }
};

// ================= GLOBAL STATE =================
let quiz = [];
let index = 0;
let score = 0;
let timer = QUESTION_TIME;
let interval = null;

// ================= HELPERS =================
function getRandomQuestions(arr, count) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// ================= QUIZ FLOW =================
function startQuiz() {
  const level = document.getElementById("level").value;
  const topic = document.getElementById("topic").value;

  const allQuestions = questionBank[level][topic];
  quiz = getRandomQuestions(allQuestions, Math.min(QUIZ_LIMIT, allQuestions.length));

  index = 0;
  score = 0;
  timer = QUESTION_TIME;

  document.getElementById("setup").classList.add("d-none");
  document.getElementById("quiz").classList.remove("d-none");
  document.getElementById("result").classList.add("d-none");

  showQuestion();
  startTimer();
}

function startTimer() {
  clearInterval(interval);
  interval = setInterval(() => {
    timer--;
    const t = document.getElementById("timer");
    if (t) t.innerText = timer;

    if (timer <= 0) showAnswerAndNext(-1); // -1 means time up, no answer selected
  }, 1000);
}

function showQuestion() {
  timer = QUESTION_TIME;
  const q = quiz[index];

  document.getElementById("quiz").innerHTML = `
    <div class="d-flex justify-content-between mb-2">
      <span>Question ${index + 1} of ${quiz.length}</span>
      <span>⏱ <b id="timer">${QUESTION_TIME}</b>s</span>
    </div>
    <h5 class="mt-2">${q.q}</h5>
    <div class="mt-3">
      ${q.o.map((op, i) => `
        <button class="btn btn-outline-primary w-100 my-1" onclick="showAnswerAndNext(${i})">${op}</button>
      `).join("")}
    </div>
  `;
}

// ================= ANSWER LOGIC WITH COLORS =================
function showAnswerAndNext(selectedIndex) {
  clearInterval(interval); // stop timer while showing colors
  const q = quiz[index];
  const buttons = document.querySelectorAll("#quiz button");

  buttons.forEach((btn, i) => {
    btn.disabled = true; // disable all buttons after selection

    if (i === q.a) {
      btn.classList.remove("btn-outline-primary");
      btn.classList.add("btn-success"); // correct -> green
    } 
    if (i === selectedIndex && i !== q.a) {
      btn.classList.remove("btn-outline-primary");
      btn.classList.add("btn-danger"); // wrong -> red
    }
  });

  if (selectedIndex === q.a) score++; // correct

  // move to next question after 1 second delay
  setTimeout(() => {
    index++;
    if (index >= quiz.length) endQuiz();
    else {
      timer = QUESTION_TIME;
      startTimer();
      showQuestion();
    }
  }, 1000);
}

// ================= END QUIZ =================
function endQuiz() {
  clearInterval(interval);

  document.getElementById("quiz").classList.add("d-none");
  document.getElementById("result").classList.remove("d-none");

  const acc = Math.round((score / quiz.length) * 100);

  document.getElementById("result").innerHTML = `
    <h3 class="text-center">Result</h3>
    <p><b>Score:</b> ${score} / ${quiz.length}</p>
    <p><b>Accuracy:</b> ${acc}%</p>
    <button class="btn btn-success w-100" onclick="location.reload()">Restart Quiz</button>
  `;
}
