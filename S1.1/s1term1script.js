let data = JSON.parse(localStorage.getItem("object")) || [{
    name:"JOHN DOE", 
    class: "S.3",
    english: 10,
    englishAOI: 20,
    mathematics: 10,
    mathematicsAOI: 20,
    physics: 10,
    physicsAOI: 20,
    chemistry: 10,
    chemistryAOI: 20,
    biology: 10,
    biologyAOI: 20,
    geography: 10,
    geographyAOI: 20,
    history: 10,
    historyAOI: 20,
    kiswahili: 10,
    kiswahiliAOI: 20,
    pe: 10,
    peAOI: 20,
    cre: 10,
    creAOI: 20,
    agriculture: 10,
    agricultureAOI: 20,
    ent: 10,
    entAOI: 20,
    art: 10,
    artAOI: 20,
    year: "2024",
    term: "III"
    

}];

function preventDefault(e) {
    e.preventDefault();
}

function validateForm(name) {
    return name.trim() !== "";
}

function isDuplicate(name) {
    return data.some(record => record.name.toLowerCase() === name.toLowerCase());
}


//functions to auto calculate AOI/3
function calmtc(record){
    const calmtc = Number (record.mathematicsAOI)
    return (calmtc/20*3).toFixed(1)
    
    }
    
    
function caleng(record){
        const caleng = Number (record.englishAOI)
        return (caleng/20*3).toFixed(1)
        
    }

function calphy(record){
    const calphy = Number (record.physicsAOI)
    return (calphy/20*3).toFixed(1)
        
}
function calche(record){
    const calche = Number (record.chemistryAOI)
    return (calche/20*3).toFixed(1)
            
}

function calbio(record){
    const calbio = Number (record.biologyAOI)
    return (calbio/20*3).toFixed(1)
                
}

function calgeo(record){
    const calgeo = Number (record.geographyAOI)
    return (calgeo/20*3).toFixed(1)
    
}

function calhis(record){
    const calhis = Number (record.historyAOI)
    return (calhis/20*3).toFixed(1)
    
}

function calkis(record){
    const calkis = Number (record.kiswahiliAOI)
    return (calkis/20*3).toFixed(1)
    
}

function calpe(record){
    const calpe = Number (record.peAOI)
    return (calpe/20*3).toFixed(1)
    
}

function calcre(record){
    const calcre = Number (record.creAOI)
    return (calcre/20*3).toFixed(1)
    
}

function calagric(record){
    const calagric = Number (record.agricultureAOI)
    return (calagric/20*3).toFixed(1)
    
}

function calent(record){
    const calent = Number (record.entAOI)
    return (calent/20*3).toFixed(1)
    
}

function calart(record){
    const calart = Number (record.artAOI)
    return (calart/20*3).toFixed(1)
    
}


//functions to auto Generate Descriptor
function descriptormtc(record) {
    const descriptormtc = Number (record.mathematicsAOI)
    if (descriptormtc < 10) return 'Basic';
    if (descriptormtc < 17) return 'Moderate';
    return 'Outstanding';
}

function descriptoreng(record) {
    const descriptoreng = Number (record.englishAOI)
    if (descriptoreng < 10) return 'Basic';
    if (descriptoreng < 17) return 'Moderate';
    return 'Outstanding';
}

function descriptorphy(record) {
    const descriptorphy = Number (record.physicsAOI)
    if (descriptorphy < 10) return 'Basic';
    if (descriptorphy < 17) return 'Moderate';
    return 'Outstanding';
}

function descriptorche(record) {
    const descriptorche = Number (record.chemistryAOI)
    if (descriptorche < 10) return 'Basic';
    if (descriptorche < 17) return 'Moderate';
    return 'Outstanding';
}

function descriptorbio(record) {
    const descriptorbio = Number (record.biologyAOI)
    if (descriptorbio < 10) return 'Basic';
    if (descriptorbio < 17) return 'Moderate';
    return 'Outstanding';
}

function descriptorgeo(record) {
    const descriptorgeo = Number (record.geographyAOI)
    if (descriptorgeo < 10) return 'Basic';
    if (descriptorgeo < 17) return 'Moderate';
    return 'Outstanding';
}

function descriptorhis(record) {
    const descriptorhis = Number (record.historyAOI)
    if (descriptorhis < 10) return 'Basic';
    if (descriptorhis < 17) return 'Moderate';
    return 'Outstanding';
}

function descriptorkis(record) {
    const descriptorkis = Number (record.kiswahiliAOI)
    if (descriptorkis < 10) return 'Basic';
    if (descriptorkis < 17) return 'Moderate';
    return 'Outstanding';
}

function descriptorpe(record) {
    const descriptorpe = Number (record.peAOI)
    if (descriptorpe < 10) return 'Basic';
    if (descriptorpe < 17) return 'Moderate';
    return 'Outstanding';
}

function descriptorcre(record) {
    const descriptorcre = Number (record.creAOI)
    if (descriptorcre < 10) return 'Basic';
    if (descriptorcre < 17) return 'Moderate';
    return 'Outstanding';
}

function descriptoragric(record) {
    const descriptoragric = Number (record.agricultureAOI)
    if (descriptoragric < 10) return 'Basic';
    if (descriptoragric < 17) return 'Moderate';
    return 'Outstanding';
}

function descriptorent(record) {
    const descriptorent = Number (record.entAOI)
    if (descriptorent < 10) return 'Basic';
    if (descriptorent < 17) return 'Moderate';
    return 'Outstanding';
}

function descriptorart(record) {
    const descriptorart = Number (record.artAOI)
    if (descriptorart < 10) return 'Basic';
    if (descriptorart < 17) return 'Moderate';
    return 'Outstanding';
}


//Functions for letter Grade
function gradeeng(record) {
    const gradeeng = Number (record.english) + Number (record.englishAOI);
    if (gradeeng <= 30) return 'G';
    if (gradeeng <= 39) return 'F';
    if (gradeeng <= 49) return 'E';
    if (gradeeng <= 59) return 'D';
    if (gradeeng <= 69) return 'C';
    if (gradeeng <= 79) return 'B';
    if (gradeeng <= 89) return 'A';
    return 'A+';
}

function grademtc(record) {
    const grademtc = Number (record.mathematics) + Number (record.mathematicsAOI);
    if (grademtc <= 30) return 'G';
    if (grademtc <= 39) return 'F';
    if (grademtc <= 49) return 'E';
    if (grademtc <= 59) return 'D';
    if (grademtc <= 69) return 'C';
    if (grademtc <= 79) return 'B';
    if (grademtc <= 89) return 'A';
    return 'A+';
}

function gradephy(record) {
    const gradephy = Number (record.physics) + Number (record.physicsAOI);
    if (gradephy <= 30) return 'G';
    if (gradephy <= 39) return 'F';
    if (gradephy <= 49) return 'E';
    if (gradephy <= 59) return 'D';
    if (gradephy <= 69) return 'C';
    if (gradephy <= 79) return 'B';
    if (gradephy <= 89) return 'A';
    return 'A+';
}

function gradeche(record) {
    const gradeche = Number (record.chemistry) + Number (record.chemistryAOI);
    if (gradeche <= 30) return 'G';
    if (gradeche <= 39) return 'F';
    if (gradeche <= 49) return 'E';
    if (gradeche <= 59) return 'D';
    if (gradeche <= 69) return 'C';
    if (gradeche <= 79) return 'B';
    if (gradeche <= 89) return 'A';
    return 'A+';
}

function gradebio(record) {
    const gradebio = Number (record.biology) + Number (record.biologyAOI);
    if (gradebio <= 30) return 'G';
    if (gradebio <= 39) return 'F';
    if (gradebio <= 49) return 'E';
    if (gradebio <= 59) return 'D';
    if (gradebio <= 69) return 'C';
    if (gradebio <= 79) return 'B';
    if (gradebio <= 89) return 'A';
    return 'A+';
}

function gradegeo(record) {
    const gradegeo = Number (record.geography) + Number (record.geographyAOI);
    if (gradegeo <= 30) return 'G';
    if (gradegeo <= 39) return 'F';
    if (gradegeo <= 49) return 'E';
    if (gradegeo <= 59) return 'D';
    if (gradegeo <= 69) return 'C';
    if (gradegeo <= 79) return 'B';
    if (gradegeo <= 89) return 'A';
    return 'A+';
}

function gradehis(record) {
    const gradehis = Number (record.history) + Number (record.historyAOI);
    if (gradehis <= 30) return 'G';
    if (gradehis <= 39) return 'F';
    if (gradehis <= 49) return 'E';
    if (gradehis <= 59) return 'D';
    if (gradehis <= 69) return 'C';
    if (gradehis <= 79) return 'B';
    if (gradehis <= 89) return 'A';
    return 'A+';
}

function gradekis(record) {
    const gradekis = Number (record.kiswahili) + Number (record.kiswahiliAOI);
    if (gradekis <= 30) return 'G';
    if (gradekis <= 39) return 'F';
    if (gradekis <= 49) return 'E';
    if (gradekis <= 59) return 'D';
    if (gradekis <= 69) return 'C';
    if (gradekis <= 79) return 'B';
    if (gradekis <= 89) return 'A';
    return 'A+';
}

function gradepe(record) {
    const gradepe = Number (record.pe) + Number (record.peAOI);
    if (gradepe <= 30) return 'G';
    if (gradepe <= 39) return 'F';
    if (gradepe <= 49) return 'E';
    if (gradepe <= 59) return 'D';
    if (gradepe <= 69) return 'C';
    if (gradepe <= 79) return 'B';
    if (gradepe <= 89) return 'A';
    return 'A+';
}

function gradecre(record) {
    const gradecre = Number (record.cre) + Number (record.creAOI);
    if (gradecre <= 30) return 'G';
    if (gradecre <= 39) return 'F';
    if (gradecre <= 49) return 'E';
    if (gradecre <= 59) return 'D';
    if (gradecre <= 69) return 'C';
    if (gradecre <= 79) return 'B';
    if (gradecre <= 89) return 'A';
    return 'A+';
}

function gradeagric(record) {
    const gradeagric = Number (record.agriculture) + Number (record.agricultureAOI);
    if (gradeagric <= 30) return 'G';
    if (gradeagric <= 39) return 'F';
    if (gradeagric <= 49) return 'E';
    if (gradeagric <= 59) return 'D';
    if (gradeagric <= 69) return 'C';
    if (gradeagric <= 79) return 'B';
    if (gradeagric <= 89) return 'A';
    return 'A+';
}

function gradeent(record) {
    const gradeent = Number (record.ent) + Number (record.entAOI);
    if (gradeent <= 30) return 'G';
    if (gradeent <= 39) return 'F';
    if (gradeent <= 49) return 'E';
    if (gradeent <= 59) return 'D';
    if (gradeent <= 69) return 'C';
    if (gradeent <= 79) return 'B';
    if (gradeent <= 89) return 'A';
    return 'A+';
}

function gradeart(record) {
    const gradeart = Number (record.art) + Number (record.artAOI);
    if (gradeart <= 30) return 'G';
    if (gradeart <= 39) return 'F';
    if (gradeart <= 49) return 'E';
    if (gradeart <= 59) return 'D';
    if (gradeart <= 69) return 'C';
    if (gradeart <= 79) return 'B';
    if (gradeart <= 89) return 'A';
    return 'A+';
}

//Function to generate Comments
function htcomment(record) {
    const htcomment = Number (record.art) + Number (record.artAOI)+
     Number (record.english) +Number (record.englishAOI)+
     Number (record.physics) + Number (record.physicsAOI)+
     Number (record.chemistry) + Number (record.chemistryAOI)+
     Number (record.mathematics) + Number (record.mathematicsAOI)+
     Number (record.biology) + Number (record.biologyAOI)+
     Number (record.geography) + Number (record.geographyAOI)+
     Number (record.history) + Number (record.historyAOI)+
     Number (record.kiswahili) + Number (record.kiswahiliAOI)+
     Number (record.pe) + Number (record.peAOI)+
     Number (record.cre) + Number (record.creAOI)+
     Number (record.agriculture) + Number (record.agricultureAOI)+
     Number (record.ent) + Number (record.entAOI)
    
    
    if (htcomment <= 390) return 'You need to double your effort in all subjects.';
    if (htcomment <= 507) return 'Double you effort for better results.';
    if (htcomment <= 637) return 'Work harder. You can do better than this.';
    if (htcomment <= 767) return 'Quite good performance. Improvement is however needed in subjects where you scored below average.';
    if (htcomment <= 897) return 'Good performance.Aim higher.';
    if (htcomment <= 1027) return 'Good result. Aim higher.';
    if (htcomment <= 1157) return 'Impressive result. Keep it up.';
    return 'This is excellent performance. Keep it up.';
}

function ctcomment(record) {
    const ctcomment = Number (record.art) + Number (record.artAOI)+
    Number (record.english) +Number (record.englishAOI)+
    Number (record.physics) + Number (record.physicsAOI)+
    Number (record.chemistry) + Number (record.chemistryAOI)+
    Number (record.mathematics) + Number (record.mathematicsAOI)+
    Number (record.biology) + Number (record.biologyAOI)+
    Number (record.geography) + Number (record.geographyAOI)+
    Number (record.history) + Number (record.historyAOI)+
    Number (record.kiswahili) + Number (record.kiswahiliAOI)+
    Number (record.pe) + Number (record.peAOI)+
    Number (record.cre) + Number (record.creAOI)+
    Number (record.agriculture) + Number (record.agricultureAOI)+
    Number (record.ent) + Number (record.entAOI)
    
    
    if (ctcomment <= 390) return 'Poor performance. You have relaxed so much. Put holidays to good use';
    if (ctcomment <= 507) return 'Poor performance. Work harder.';
    if (ctcomment <= 637) return 'You can do better than this. Concentrate more on your studies.';
    if (ctcomment <= 767) return 'Performance is quite good but you should aim for better next term.';
    if (ctcomment <= 897) return 'You have performed well. Aim higher next term.';
    if (ctcomment <= 1027) return 'Hardwork has gotten you this far. Do not relax.';
    if (ctcomment <= 1157) return 'Very good result. Keep it up.';
    return 'Impressive result. Keep it up.';
}

//Read records from Local Storage
function readAll(){
    localStorage.setItem("object", JSON.stringify(data));
    var tableData = document.querySelector(".dataTable");
    var object = localStorage.getItem("object");
    var objectData = JSON.parse(object);
    var elements = "";

    objectData.map((record, index)=>{

        //for AOI/3
        const Caleng = caleng(record);
        const Calmtc = calmtc(record);
        const Calphy = calphy(record);
        const Calche = calche(record);
        const Calbio = calbio(record);
        const Calgeo = calgeo(record);
        const Calhis = calhis(record);
        const Calkis = calkis(record);
        const Calpe = calpe(record);
        const Calcre = calcre(record);
        const Calagric = calagric(record);
        const Calent = calent(record);
        const Calart = calart(record);
      
       
        //for Desriptor
        const Descriptormtc = descriptormtc(record);
        const Descriptoreng = descriptoreng(record);
        const Descriptorphy = descriptorphy(record);
        const Descriptorche = descriptorche(record);
        const Descriptorbio = descriptorbio(record);
        const Descriptorgeo = descriptorgeo(record);
        const Descriptorhis = descriptorhis(record);
        const Descriptorkis = descriptorkis(record);
        const Descriptorpe = descriptorpe(record);
        const Descriptorcre = descriptorcre(record);
        const Descriptoragric = descriptoragric(record);
        const Descriptorent = descriptorent(record);
        const Descriptorart = descriptorart(record);
        
        //for letter Grade
        const Gradeeng = gradeeng(record);
        const Grademtc = grademtc(record);
        const Gradephy = gradephy(record);
        const Gradeche = gradeche(record);
        const Gradebio = gradebio(record);
        const Gradegeo = gradegeo(record);
        const Gradehis = gradehis(record);
        const Gradekis = gradekis(record);
        const Gradepe = gradepe(record);
        const Gradecre = gradecre(record);
        const Gradeagric = gradeagric(record);
        const Gradeent = gradeent(record);
        const Gradeart = gradeart(record);
        

        //for Comments
        const Htcomment = htcomment(record);
        const Ctcomment = ctcomment(record);


        elements += 
        `<tr>
        <td>
                <button onclick="edit(${index})">Edit</button>
                <button onclick="deleteRecord(${index})">Delete</button>
            </td>
            <td>${record.name}</td>
            <td>${record.class}</td>
            <td>${record.year}</td>
            <td>${record.term}</td>
            <td>${record.englishAOI}</td>
            <td>${Caleng}</td>
            <td>${Descriptoreng}</td>
            <td>${record.english}</td>
            <td>${Gradeeng}</td>
            <td>${record.mathematicsAOI}</td>
            <td>${Calmtc}</td>
            <td>${Descriptormtc}</td>
            <td>${record.mathematics}</td>
            <td>${Grademtc}</td>
            <td>${record.physicsAOI}</td>
            <td>${Calphy}</td>
            <td>${Descriptorphy}</td>
            <td>${record.physics}</td>
            <td>${Gradephy}</td>
            <td>${record.chemistryAOI}</td>
            <td>${Calche}</td>
            <td>${Descriptorche}</td>
            <td>${record.chemistry}</td>
            <td>${Gradeche}</td>
            <td>${record.biologyAOI}</td>
            <td>${Calbio}</td>
            <td>${Descriptorbio}</td>
            <td>${record.biology}</td>
            <td>${Gradebio}</td>
            <td>${record.geographyAOI}</td>
            <td>${Calgeo}</td>
            <td>${Descriptorgeo}</td>
            <td>${record.geography}</td>
            <td>${Gradegeo}</td>
            <td>${record.historyAOI}</td>
            <td>${Calhis}</td>
            <td>${Descriptorhis}</td>
            <td>${record.history}</td>
            <td>${Gradehis}</td>
            <td>${record.kiswahiliAOI}</td>
            <td>${Calkis}</td>
            <td>${Descriptorkis}</td>
            <td>${record.kiswahili}</td>
            <td>${Gradekis}</td>
            <td>${record.peAOI}</td>
            <td>${Calpe}</td>
            <td>${Descriptorpe}</td>
            <td>${record.pe}</td>
            <td>${Gradepe}</td>
            <td>${record.creAOI}</td>
            <td>${Calcre}</td>
            <td>${Descriptorcre}</td>
            <td>${record.cre}</td>
            <td>${Gradecre}</td>
            <td>${record.agricultureAOI}</td>
            <td>${Calagric}</td>
            <td>${Descriptorcre}</td>
            <td>${record.agriculture}</td>
            <td>${Gradeagric}</td>
            <td>${record.entAOI}</td>
            <td>${Calent}</td>
            <td>${Descriptorent}</td>
            <td>${record.ent}</td>
            <td>${Gradeent}</td>
            <td>${record.artAOI}</td>
            <td>${Calart}</td>
            <td>${Descriptorart}</td>
            <td>${record.art}</td>
            <td>${Gradeart}</td>
            <td>${Ctcomment}</td>
            <td>${Htcomment}</td>
        
        <tr>`

});

    tableData.innerHTML = elements;

};


function create(){
var name = document.querySelector(".name").value;
if (!validateForm(name)) {
    alert("Name cannot be empty!");
    return;
}
if (isDuplicate(name)) {
    alert("Student already exists!");
    return;
}
var classs = document.querySelector(".class").value;
var year = document.querySelector(".year").value;
var term = document.querySelector(".term").value;
var english = document.querySelector(".english").value;
var englishAOI = document.querySelector(".englishAOI").value;
var mathematics = document.querySelector(".mathematics").value;
var mathematicsAOI = document.querySelector(".mathematicsAOI").value;
var physics = document.querySelector(".physics").value;
var physicsAOI = document.querySelector(".physicsAOI").value;
var chemistry = document.querySelector(".chemistry").value;
var chemistryAOI = document.querySelector(".chemistryAOI").value;
var biology = document.querySelector(".biology").value;
var biologyAOI = document.querySelector(".biologyAOI").value;
var geography = document.querySelector(".geography").value;
var geographyAOI = document.querySelector(".geographyAOI").value;
var history = document.querySelector(".history").value;
var historyAOI = document.querySelector(".historyAOI").value;
var kiswahili = document.querySelector(".kiswahili").value;
var kiswahiliAOI = document.querySelector(".kiswahiliAOI").value;
var pe = document.querySelector(".pe").value;
var peAOI = document.querySelector(".peAOI").value;
var cre = document.querySelector(".cre").value;
var creAOI = document.querySelector(".creAOI").value;
var agriculture = document.querySelector(".agriculture").value;
var agricultureAOI = document.querySelector(".agricultureAOI").value;
var ent = document.querySelector(".ent").value;
var entAOI = document.querySelector(".entAOI").value;
var art = document.querySelector(".art").value;
var artAOI = document.querySelector(".artAOI").value;



var newObject = {
    name:name,
    class:classs,
    term:term,
    year: year,
    english:english,
    englishAOI: englishAOI,
    mathematics:mathematics,
    mathematicsAOI: mathematicsAOI,
    physics:physics,
    physicsAOI:physicsAOI,
    chemistry:chemistry,
    chemistryAOI:chemistryAOI,
    biology:biology,
    biologyAOI:biologyAOI,
    geography:geography,
    geographyAOI:geographyAOI,
    history: history,
    historyAOI:historyAOI,
    kiswahili:kiswahili,
    kiswahiliAOI:kiswahiliAOI,
    pe:pe,
    peAOI:peAOI,
    cre:cre,
    creAOI:creAOI,
    agriculture:agriculture,
    agricultureAOI:agricultureAOI,
    ent:ent,
    entAOI:entAOI,
    art:art,
    artAOI:artAOI
    
};

data.push(newObject);

readAll();

};

// Function to edit a record
function edit(index) {
    const record = data[index];
    document.querySelector(".name").value = record.name;
    document.querySelector(".class").value = record.class;
    document.querySelector(".year").value = record.year;
    document.querySelector(".term").value = record.term;
    document.querySelector(".english").value = record.english;
    document.querySelector(".englishAOI").value = record.englishAOI;
    document.querySelector(".mathematics").value = record.mathematics;
    document.querySelector(".mathematicsAOI").value = record.mathematicsAOI;
    document.querySelector(".physics").value = record.physics;
    document.querySelector(".physics").value = record.physicsAOI;
    document.querySelector(".chemistry").value = record.chemistry;
    document.querySelector(".chemistryAOI").value = record.chemistryAOI;
    document.querySelector(".biology").value = record.biology;
    document.querySelector(".biologyAOI").value = record.biologyAOI;
    document.querySelector(".geography").value = record.geography;
    document.querySelector(".geographyAOI").value = record.geographyAOI;
    document.querySelector(".history").value = record.history;
    document.querySelector(".historyAOI").value = record.historyAOI;
    document.querySelector(".kiswahili").value = record.kiswahili;
    document.querySelector(".kiswahiliAOI").value = record.kiswahiliAOI;
    document.querySelector(".pe").value = record.pe;
    document.querySelector(".peAOI").value = record.peAOI;
    document.querySelector(".cre").value = record.cre;
    document.querySelector(".creAOI").value = record.creAOI;
    document.querySelector(".agriculture").value = record.agriculture;
    document.querySelector(".agricultureAOI").value = record.agricultureAOI;
    document.querySelector(".ent").value = record.ent;
    document.querySelector(".entAOI").value = record.entAOI;
    document.querySelector(".art").value = record.art;
    document.querySelector(".artAOI").value = record.artAOI;


    // Update button logic
    document.querySelector(".update-button").onclick = function() {
        update(index);
    };
}

// Function to update a record
function update(index) {
    data[index].name = document.querySelector(".name").value;
    data[index].class = document.querySelector(".class").value;
    data[index].year = document.querySelector(".year").value;
    data[index].term = document.querySelector(".term").value;
    data[index].english = document.querySelector(".english").value;
    data[index].englishAOI = document.querySelector(".englishAOI").value;
    data[index].mathematics = document.querySelector(".mathematics").value;
    data[index].mathematicsAOI = document.querySelector(".mathematicsAOI").value;
    data[index].physics = document.querySelector(".physics").value;
    data[index].physicsAOI = document.querySelector(".physicsAOI").value;
    data[index].chemistry = document.querySelector(".chemistry").value;
    data[index].chemistryAOI = document.querySelector(".chemistryAOI").value;
    data[index].biology = document.querySelector(".biology").value;
    data[index].biologyAOI = document.querySelector(".biologyAOI").value;
    data[index].geography = document.querySelector(".geography").value;
    data[index].geographyAOI = document.querySelector(".geographyAOI").value;
    data[index].history = document.querySelector(".history").value;
    data[index].historyAOI = document.querySelector(".historyAOI").value;
    data[index].kiswahili = document.querySelector(".kiswahili").value;
    data[index].kiswahiliAOI = document.querySelector(".kiswahiliAOI").value;
    data[index].pe = document.querySelector(".pe").value;
    data[index].peAOI = document.querySelector(".peAOI").value;
    data[index].cre = document.querySelector(".cre").value;
    data[index].creAOI = document.querySelector(".creAOI").value;
    data[index].agriculture = document.querySelector(".agriculture").value;
    data[index].agricultureAOI = document.querySelector(".agricultureAOI").value;
    data[index].ent = document.querySelector(".ent").value;
    data[index].entAOI = document.querySelector(".entAOI").value;
    data[index].art = document.querySelector(".art").value;
    data[index].artAOI = document.querySelector(".artAOI").value;
    
    readAll();
}


// Function to delete a record
function deleteRecord(index) {
    data.splice(index, 1);
    readAll();
}

// Function to delete all records
function deleteAllRecords() {
    if (confirm("Are you sure you want to delete all records? This action cannot be undone.")) {
        localStorage.removeItem('object');
        alert("All records have been deleted.");
        location.reload(); // Refresh the page or update the UI
    }
}

 // Keyboard navigation
 var inputs = document.querySelectorAll('input[type="text"]');
 inputs.forEach(function(input, index) {
     input.addEventListener('keydown', function(event) {
         if (event.key === "ArrowRight" && index < inputs.length - 1) {
             inputs[index + 1].focus();
         } else if (event.key === "ArrowLeft" && index > 0) {
             inputs[index - 1].focus();
         }
     });
 });

 // Function to export data to CSV
function exportToCSV() {
    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));

    for (const row of data) {
        const values = headers.map(header => JSON.stringify(row[header]));
        csvRows.push(values.join(','));
    }

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'data.csv');
    a.click();
}

//Function to search by student's name
function searchByName() {
    const query = document.querySelector(".search-input").value.toLowerCase();
    const filteredData = data.filter(record => record.name.toLowerCase().includes(query));
    displayFilteredResults(filteredData);
}

function displayFilteredResults(filteredData) {
    const tableData = document.querySelector(".dataTable");
    let elements = "";

    filteredData.forEach((record, index) => {
        // Calculate, generate descriptors, grades, and comments...
    

            //for AOI/3
        const Caleng = caleng(record);
        const Calmtc = calmtc(record);
        const Calphy = calphy(record);
        const Calche = calche(record);
        const Calbio = calbio(record);
        const Calgeo = calgeo(record);
        const Calhis = calhis(record);
        const Calkis = calkis(record);
        const Calpe = calpe(record);
        const Calcre = calcre(record);
        const Calagric = calagric(record);
        const Calent = calent(record);
        const Calart = calart(record);
            
            //for Desriptor
        const Descriptormtc = descriptormtc(record);
        const Descriptoreng = descriptoreng(record);
        const Descriptorphy = descriptorphy(record);
        const Descriptorche = descriptorche(record);
        const Descriptorbio = descriptorbio(record);
        const Descriptorgeo = descriptorgeo(record);
        const Descriptorhis = descriptorhis(record);
        const Descriptorkis = descriptorkis(record);
        const Descriptorpe = descriptorpe(record);
        const Descriptorcre = descriptorcre(record);
        const Descriptoragric = descriptoragric(record);
        const Descriptorent = descriptorent(record);
        const Descriptorart = descriptorart(record);
    
            //for letter Grade
        const Gradeeng = gradeeng(record);
        const Grademtc = grademtc(record);
        const Gradephy = gradephy(record);
        const Gradeche = gradeche(record);
        const Gradebio = gradebio(record);
        const Gradegeo = gradegeo(record);
        const Gradehis = gradehis(record);
        const Gradekis = gradekis(record);
        const Gradepe = gradepe(record);
        const Gradecre = gradecre(record);
        const Gradeagric = gradeagric(record);
        const Gradeent = gradeent(record);
        const Gradeart = gradeart(record);

            //for Comments
            const Htcomment = htcomment(record);
            const Ctcomment = ctcomment(record);

        elements += `
        <tr>
        <td>
        <button onclick="edit(${index})">Edit</button>
        <button onclick="deleteRecord(${index})">Delete</button>
    </td>
    <td>${record.name}</td>
    <td>${record.class}</td>
    <td>${record.year}</td>
    <td>${record.term}</td>
    <td>${record.englishAOI}</td>
    <td>${Caleng}</td>
    <td>${Descriptoreng}</td>
    <td>${record.english}</td>
    <td>${Gradeeng}</td>
    <td>${record.mathematicsAOI}</td>
    <td>${Calmtc}</td>
    <td>${Descriptormtc}</td>
    <td>${record.mathematics}</td>
    <td>${Grademtc}</td>
    <td>${record.physicsAOI}</td>
    <td>${Calphy}</td>
    <td>${Descriptorphy}</td>
    <td>${record.physics}</td>
    <td>${Gradephy}</td>
    <td>${record.chemistryAOI}</td>
    <td>${Calche}</td>
    <td>${Descriptorche}</td>
    <td>${record.chemistry}</td>
    <td>${Gradeche}</td>
    <td>${record.biologyAOI}</td>
    <td>${Calbio}</td>
    <td>${Descriptorbio}</td>
    <td>${record.biology}</td>
    <td>${Gradebio}</td>
    <td>${record.geographyAOI}</td>
    <td>${Calgeo}</td>
    <td>${Descriptorgeo}</td>
    <td>${record.geography}</td>
    <td>${Gradegeo}</td>
    <td>${record.historyAOI}</td>
    <td>${Calhis}</td>
    <td>${Descriptorhis}</td>
    <td>${record.history}</td>
    <td>${Gradehis}</td>
    <td>${record.kiswahiliAOI}</td>
    <td>${Calkis}</td>
    <td>${Descriptorkis}</td>
    <td>${record.kiswahili}</td>
    <td>${Gradekis}</td>
    <td>${record.peAOI}</td>
    <td>${Calpe}</td>
    <td>${Descriptorpe}</td>
    <td>${record.pe}</td>
    <td>${Gradepe}</td>
    <td>${record.creAOI}</td>
    <td>${Calcre}</td>
    <td>${Descriptorcre}</td>
    <td>${record.cre}</td>
    <td>${Gradecre}</td>
    <td>${record.agricultureAOI}</td>
    <td>${Calagric}</td>
    <td>${Descriptorcre}</td>
    <td>${record.agriculture}</td>
    <td>${Gradeagric}</td>
    <td>${record.entAOI}</td>
    <td>${Calent}</td>
    <td>${Descriptorent}</td>
    <td>${record.ent}</td>
    <td>${Gradeent}</td>
    <td>${record.artAOI}</td>
    <td>${Calart}</td>
    <td>${Descriptorart}</td>
    <td>${record.art}</td>
    <td>${Gradeart}</td>
    <td>${Ctcomment}</td>
    <td>${Htcomment}</td>
       
        </tr>`;
    });

    tableData.innerHTML = elements;
}

// Call readAll to display initial records
readAll();



// Function to import data from CSV
function importCSV(file) {

    

    const reader = new FileReader();
    reader.onload = function (event) {
        const text = event.target.result;
        const lines = text.split('\n');
        const headers = lines[0].split(',');

        lines.slice(1).forEach(line => {
            const values = line.split(',');
            const newRecord = {};

            headers.forEach((header, index) => {
                newRecord[header.trim()] = values[index].trim();
            });

            data.push(newRecord);
        });

        localStorage.setItem("object", JSON.stringify(data));
        readAll(); // Refresh the data display
    };
    reader.readAsText(file);
}

// Function to handle file input for CSV import
document.getElementById('csvInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        importCSV(file);
    }
});



function importData() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a file to import.");
        return;
    }

    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (fileExtension === 'csv') {
        // Parse CSV file
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: (results) => {
                processImportedData(results.data);
            },
            error: (error) => {
                console.error("Error parsing CSV: ", error);
            }
        });
    } else if (fileExtension === 'xlsx') {
        // Parse Excel file
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
            const headers = jsonData[0];
            const importedData = jsonData.slice(1).map(row => {
                const obj = {};
                headers.forEach((header, index) => {
                    obj[header] = row[index];
                });
                return obj;
            });
            processImportedData(importedData);
        };
        reader.readAsArrayBuffer(file);
    } else {
        alert("Unsupported file format. Please upload a CSV or Excel file.");
    }
}

function processImportedData(importedData) {
    // Update the existing data array
    importedData.forEach(record => {
        if (!isDuplicate(record.name)) { // Assuming `isDuplicate` checks by name
            data.push(record);
        }
    });

    // Save to local storage
    localStorage.setItem("object", JSON.stringify(data));
    readAll(); // Refresh the data table
};

// Function to handle logo upload and store it in local storage
function uploadLogo() {
    const logoInput = document.getElementById('logoInput');
    const file = logoInput.files[0];

    if (file && file.type === 'image/png') {
        const reader = new FileReader();
        reader.onload = function (event) {
            const base64String = event.target.result;
            // Save the base64 image to local storage
            localStorage.setItem('logoBase64', base64String);
            alert('Logo uploaded and saved successfully!');
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please upload a PNG image.');
    }
}

//Next term date
function nextTermDate() {
    var nextTermDate = document.getElementById('nextTermDate').value;
    if (nextTermDate) {
        localStorage.setItem('nextTermDate', nextTermDate);
        alert('Next term date saved successfully!');
    } else {
        alert('Please select a date.');
    }
};


// Function to generate PDFs with jsPDF including the logo
async function generatePDFs() {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "cm", "a4");

    // Get the logo from local storage
    const logoBase64 = localStorage.getItem('logoBase64');
    var nextTermDate = localStorage.getItem('nextTermDate') || 'Not set';

    for (const record of data) {
        // Page content similar to what you already have
        const Caleng = caleng(record);
        const Calmtc = calmtc(record);
        const Calphy = calphy(record);
        const Calche = calche(record);
        const Calbio = calbio(record);
        const Calgeo = calgeo(record);
        const Calhis = calhis(record);
        const Calkis = calkis(record);
        const Calpe = calpe(record);
        const Calcre = calcre(record);
        const Calagric = calagric(record);
        const Calent = calent(record);
        const Calart = calart(record);

        const Descriptormtc = descriptormtc(record);
        const Descriptoreng = descriptoreng(record);
        const Descriptorphy = descriptorphy(record);
        const Descriptorche = descriptorche(record);
        const Descriptorbio = descriptorbio(record);
        const Descriptorgeo = descriptorgeo(record);
        const Descriptorhis = descriptorhis(record);
        const Descriptorkis = descriptorkis(record);
        const Descriptorpe = descriptorpe(record);
        const Descriptorcre = descriptorcre(record);
        const Descriptoragric = descriptoragric(record);
        const Descriptorent = descriptorent(record);
        const Descriptorart = descriptorart(record);

        const Gradeeng = gradeeng(record);
        const Grademtc = grademtc(record);
        const Gradephy = gradephy(record);
        const Gradeche = gradeche(record);
        const Gradebio = gradebio(record);
        const Gradegeo = gradegeo(record);
        const Gradehis = gradehis(record);
        const Gradekis = gradekis(record);
        const Gradepe = gradepe(record);
        const Gradecre = gradecre(record);
        const Gradeagric = gradeagric(record);
        const Gradeent = gradeent(record);
        const Gradeart = gradeart(record);

        const Htcomment = htcomment(record);
        const Ctcomment = ctcomment(record);

        // If the logo exists, add it to the PDF
        if (logoBase64) {
            // Add logo to the top of the page (adjust the position and size as needed)
            pdf.addImage(logoBase64, 'PNG', 2.5, 2.5, 3.5, 3.5); // X, Y, width, height
        }

        // Text and data generation
        pdf.setFontSize(11);
        pdf.setFont("Bookman Old Style", "bold")
        pdf.text(`${record.name}`, 3.8, 6.5);
        pdf.setFont("Bookman Old Style", "regular")
        pdf.text("Name: ", 2.5,6.5);
        pdf.setFont("Bookman Old Style", "bold")
        pdf.text(`${record.class}`, 12, 6.5);
        pdf.setFont("Bookman Old Style", "regular")
        pdf.text("Class: ", 10.9, 6.5);
        pdf.setFont("Bookman Old Style", "bold")
        pdf.text(`${record.year}`, 14.4, 6.5);
        pdf.setFont("Bookman Old Style", "regular")
        pdf.text("Year: ",13.3, 6.5 );
        pdf.setFont("Bookman Old Style", "bold")
        pdf.text(`${record.term}`, 16.9, 6.5);
        pdf.setFont("Bookman Old Style", "regular")
        pdf.text("Term: ", 15.7, 6.5);

        pdf.setFontSize(9);
        pdf.setFont("Times New Roman", "regular");
        pdf.text(`${record.englishAOI}`, 7.3, 10);
        pdf.text(`${record.mathematicsAOI}`, 7.3, 10.5);
        pdf.text(`${record.physicsAOI}`, 7.3, 11);
        pdf.text(`${record.chemistryAOI}`, 7.3, 11.5);
        pdf.text(`${record.biologyAOI}`, 7.3, 12);
        pdf.text(`${record.geographyAOI}`, 7.3, 12.5);
        pdf.text(`${record.historyAOI}`, 7.3, 13);
        pdf.text(`${record.kiswahiliAOI}`, 7.3, 13.5);
        pdf.text(`${record.peAOI}`, 7.3, 14);
        pdf.text(`${record.creAOI}`, 7.3, 14.5);
        pdf.text(`${record.agricultureAOI}`, 7.3, 15);
        pdf.text(`${record.entAOI}`, 7.3, 15.5);
        pdf.text(`${record.artAOI}`, 7.3, 16);

        pdf.text(`${record.english}`, 13.6, 10);
        pdf.text(`${record.mathematics}`, 13.6, 10.5);
        pdf.text(`${record.physics}`, 13.6, 11);
        pdf.text(`${record.chemistry}`, 13.6, 11.5);
        pdf.text(`${record.biology}`, 13.6, 12);
        pdf.text(`${record.geography}`, 13.6, 12.5);
        pdf.text(`${record.history}`, 13.6, 13);
        pdf.text(`${record.kiswahili}`, 13.6, 13.5);
        pdf.text(`${record.pe}`, 13.6, 14);
        pdf.text(`${record.cre}`, 13.6, 14.5);
        pdf.text(`${record.agriculture}`, 13.6, 15);
        pdf.text(`${record.ent}`, 13.6, 15.5);
        pdf.text(`${record.art}`, 13.6, 16);
        
        pdf.setFontSize(9);
        pdf.text(`${Descriptoreng}`, 10.3, 10);
        pdf.text(`${Descriptormtc}`, 10.3, 10.5);
        pdf.text(`${Descriptorphy}`, 10.3, 11);
        pdf.text(`${Descriptorche}`, 10.3, 11.5);
        pdf.text(`${Descriptorbio}`, 10.3, 12);
        pdf.text(`${Descriptorgeo}`, 10.3, 12.5);
        pdf.text(`${Descriptorhis}`, 10.3, 13);
        pdf.text(`${Descriptorkis}`, 10.3, 13.5);
        pdf.text(`${Descriptorpe}`, 10.3, 14);
        pdf.text(`${Descriptorcre}`, 10.3, 14.5);
        pdf.text(`${Descriptoragric}`, 10.3, 15);
        pdf.text(`${Descriptorent}`, 10.3, 15.5);
        pdf.text(`${Descriptorart}`, 10.3, 16);

        pdf.text(`${Caleng}`, 9, 10);
        pdf.text(`${Calmtc}`, 9, 10.5);
        pdf.text(`${Calphy}`, 9, 11);
        pdf.text(`${Calche}`, 9, 11.5);
        pdf.text(`${Calbio}`, 9, 12);
        pdf.text(`${Calgeo}`, 9, 12.5);
        pdf.text(`${Calhis}`, 9, 13);
        pdf.text(`${Calkis}`, 9, 13.5);
        pdf.text(`${Calpe}`, 9, 14);
        pdf.text(`${Calcre}`, 9, 14.5);
        pdf.text(`${Calagric}`, 9, 15);
        pdf.text(`${Calent}`, 9, 15.5);
        pdf.text(`${Calart}`, 9, 16);

        pdf.setFont("Bookman Old Style", "bold")
        pdf.text(`${Gradeeng}`, 15.6, 10);
        pdf.text(`${Grademtc}`, 15.6, 10.5);
        pdf.text(`${Gradephy}`, 15.6, 11);
        pdf.text(`${Gradeche}`, 15.6, 11.5);
        pdf.text(`${Gradebio}`, 15.6, 12);
        pdf.text(`${Gradegeo}`, 15.6, 12.5);
        pdf.text(`${Gradehis}`, 15.6, 13);
        pdf.text(`${Gradekis}`, 15.6, 13.5);
        pdf.text(`${Gradepe}`, 15.6, 14);
        pdf.text(`${Gradecre}`, 15.6, 14.5);
        pdf.text(`${Gradeagric}`, 15.6, 15);
        pdf.text(`${Gradeent}`, 15.6, 15.5);
        pdf.text(`${Gradeart}`, 15.6, 16);

        pdf.setFont("Bookman Old Style", "regular")
        pdf.text(`${Ctcomment}`, 6.2, 17);
        pdf.setFont("Bookman Old Style", "bold")
        pdf.text("Classteacher's Comment:", 2.5, 17);
        pdf.setFont("Bookman Old Style", "regular")
        pdf.text(`${Htcomment}`, 6.2, 17.5);
        pdf.setFont("Bookman Old Style", "bold")
        pdf.text("Headteacher's Comment:", 2.5, 17.5);
        pdf.text("Headteacher's Signature: ....................", 2.5, 18.6);
        pdf.text(11.5, 18.6, 'Next Term Begins on: ' + nextTermDate);

         // More text as needed...
         pdf.setFontSize(20);
         pdf.setFont("Bookman Old Style", "bold")
         pdf.text("KASAGAMA SECONDARY SCHOOL", 6, 3);
         pdf.setFontSize(14);
         pdf.text("P.O BOX 52, LYANTONDE", 9.2, 4);
         pdf.setFontSize(10);
         pdf.setFont("Bookman Old Style", "regular")
         pdf.text("Tel: 0759-591899 / 0789-276351", 9.9, 4.5);

         pdf.setFontSize(12);
         pdf.setFont("Bookman Old Style", "bold")
         pdf.text(" O'Level Report ", 9.9, 5.5);
 
         //subject names
         pdf.setFontSize(9);
         pdf.setFont("Bookman Old Style", "bold")
         pdf.text("ENGLISH LANGUAGE", 2.5, 10);
         pdf.text("MATHEMATICS", 2.5, 10.5);
         pdf.text("PHYSICS", 2.5, 11);
         pdf.text("CHEMISTRY", 2.5, 11.5);
         pdf.text("BIOLOGY", 2.5, 12);
         pdf.text("GEOGRAPHY", 2.5, 12.5);
         pdf.text("HISTORY & POL. EDUC", 2.5, 13);
         pdf.text("KISWAHILI", 2.5, 13.5);
         pdf.text("PE", 2.5, 14);
         pdf.text("CRE", 2.5, 14.5);
         pdf.text("AGRICULTURE", 2.5, 15);
         pdf.text("ENTREPRENEURSHIP", 2.5, 15.5);
         pdf.text("ART & DESIGN", 2.5, 16);
 
         //Subject headers
         pdf.setFontSize(9);
         pdf.setFont("Times New Roman", "regular")
         pdf.text("Subject", 3, 8.3);
 
         pdf.text("Av.AOI", 6.9, 8.3);
         pdf.setFontSize(9);
         pdf.text("Scores", 7, 8.7);
         pdf.text("(20)", 7.2, 9.1);
 
         pdf.setFontSize(9);
         pdf.text("Av.AOI", 8.7,8.3);
         pdf.setFontSize(9);
         pdf.text("Scores", 8.8,8.7);
         pdf.text("(3)", 9,9.1);
 
         
         pdf.text("Descriptor", 10.3,8.3);
         pdf.text("End of", 13.4,8.3);
         pdf.text("Term (80)", 13.2,8.7);
         pdf.text("Grade", 15.3,8.3);
         pdf.text("(Tr's)", 16.9,8.3);
         pdf.text("(Initials)", 16.7,8.7);
 
         //Grading Table
         pdf.setFontSize(8);
         pdf.setFont("Times New Roman", "bold");
         pdf.text("GRADE", 2.5, 20);
         pdf.text("SCORE RANGE", 5, 20);
         pdf.text("GRADE DESCRIPTOR", 8.1, 20);

         pdf.setFont("Bookman Old Style", "regular")
         pdf.text("A+", 3.4, 20.4);
         pdf.text("A", 3.4, 21.2);
         pdf.text("B", 3.4, 22);
         pdf.text("C", 3.4, 22.8);
         pdf.text("D", 3.4, 23.2);
         pdf.text("E", 3.4, 23.6);
         pdf.text("F", 3.4, 24.4);
         pdf.text("G", 3.4, 25.2);
 
         pdf.text("90-100", 6, 20.4);
         pdf.text("80-89", 6, 21.2);
         pdf.text("70-79", 6, 22);
         pdf.text("60-69", 6, 22.8);
         pdf.text("50-59", 6, 23.2);
         pdf.text("40-49", 6, 23.6);
         pdf.text("30-39", 6, 24.4);
         pdf.text("<30", 6, 25.2);
 
         pdf.text("Achieved MOST or ALL competencies in the subject exceptionally well. The", 8.1, 20.4 );
         pdf.text("learner is outstanding in most or all areas of the subject ", 8.1, 20.8);
         pdf.text("Achieved MOST or ALL competencies exceedingly well. The learner is ", 8.1, 21.2);
         pdf.text("excellent in most or all areas of the subject. ", 8.1, 21.6);
         pdf.text("Achieved MOST but not all competencies well. The learner is very good in a", 8.1,22);
         pdf.text("number of areas in the subject", 8.1, 22.4);
         pdf.text("Achieved a good number of competencies in the subject. ", 8.1, 22.8);
         pdf.text("Achieved a basic number of competencies in the subject. ", 8.1, 23.2);
         pdf.text("Achieved bare minimum number of competencies in the subject, just enough to ", 8.1, 23.6);
         pdf.text("exhibit the required knowledge and skills ", 8.1, 24);
         pdf.text("Achieved a number of competencies but not enough to make him or her", 8.1, 24.4);
         pdf.text("competent across the subject", 8.1, 24.8);
         pdf.text("Achieved very few or no competencies. ", 8.1, 25.2);
 
         pdf.setFont("Times New Roman", "bold")
         pdf.text("IDENTIFIER", 2.5, 25.7);
         pdf.text("SCORE RANGE", 5, 25.7);
         pdf.text("DESCRIPTOR", 8.1, 25.7);
 
         pdf.setFont("Bookman Old Style", "regular")
         pdf.text("1", 3.4, 26.1);
         pdf.text("2", 3.4, 26.5);
         pdf.text("3", 3.4, 26.9);
 
         pdf.text("2.5-3.0", 6, 26.1);
         pdf.text("1.5-2.4", 6, 26.5);
         pdf.text("0.9-1.4", 6, 26.9);
 
         pdf.text("Outstanding: Most or all LOs achieved for overall achievement. ", 8.1, 26.1);
         pdf.text("Moderate: Many LOs achieved enough for overall achievement. ", 8.1, 26.5);
         pdf.text("Basic: Few LOs achieved but not sufficient for overall achievement. ", 8.1, 26.9);
         
 
         // Tr's Initials
 
         pdf.text("K.B", 17, 10);
         pdf.text("M.J", 17, 10.5);
         pdf.text("K.A", 17, 11);
         pdf.text("M.R", 17, 11.5);
         pdf.text("T.G", 17, 12);
         pdf.text("A.B.D", 17, 12.5);
         pdf.text("N.F", 17, 13);
         pdf.text("N.Z.A", 17, 13.5);
         pdf.text("K.G", 17, 14);
         pdf.text("K.J.M", 17, 14.5);
         pdf.text("N.J", 17, 15);
         pdf.text("B.A", 17, 15.5);
         pdf.text("B.A", 17, 16);
 
         pdf.setFontSize(10);
         pdf.setFont("Bookman Old Style", "bold")
         pdf.text("End of Chapter Activites of Integration Scores", 7.2, 7.6);
         
 
         //Report Results borders
         pdf.setFont("custom", "regular")
         
         pdf.setFontSize(9);
 
         pdf.text("_____________________________________________________", 2.2, 16.2, {
             angle: 90
         });
         pdf.text("_____________________________________________________", 6.5, 16.2, {
             angle: 90
         });
 
         pdf.text("_____________________________________________________", 8.3, 16.2, {
             angle: 90
         });
 
         pdf.text("_____________________________________________________", 10, 16.2, {
             angle: 90
         });
 
         pdf.text("_____________________________________________________", 12.5, 16.2, {
             angle: 90
         });
 
         pdf.text("_____________________________________________________", 15, 16.2, {
             angle: 90
         });
 
         pdf.text("_____________________________________________________", 16.5, 16.2, {
             angle: 90
         });
 
         pdf.text("_____________________________________________________", 18, 16.2, {
             angle: 90
         });
 
         
         //Columns
         pdf.text("___________________________________________________________________________________________________",  2.3, 16.1,);
         pdf.text("___________________________________________________________________________________________________", 2.3, 7.7,);
         
         pdf.text("___________________________________________________________________________________________________", 2.3, 9.5,);
         pdf.text("___________________________________________________________________________________________________", 2.3, 10,);
         pdf.text("___________________________________________________________________________________________________", 2.3, 10.5,);
         pdf.text("___________________________________________________________________________________________________", 2.3, 11,);
         pdf.text("___________________________________________________________________________________________________", 2.3, 11.5,);
         pdf.text("___________________________________________________________________________________________________", 2.3, 12,);
         pdf.text("___________________________________________________________________________________________________", 2.3, 12.5,);
         pdf.text("___________________________________________________________________________________________________", 2.3, 13,);
         pdf.text("___________________________________________________________________________________________________", 2.3, 13.5,);
         pdf.text("___________________________________________________________________________________________________", 2.3, 14,);
         pdf.text("___________________________________________________________________________________________________", 2.3, 14.5,);
         pdf.text("___________________________________________________________________________________________________", 2.3, 15,);
         pdf.text("___________________________________________________________________________________________________", 2.3, 15.5,);
 
 
         //Grade table borders
         pdf.text("______________________________________________", 2.3, 26.9, {
             angle: 90
         });
         pdf.text("______________________________________________", 4.8, 26.9, {
             angle: 90
         });
         pdf.text("______________________________________________", 7.9, 26.9, {
             angle: 90
         });
         pdf.text("______________________________________________", 17.6, 26.9, {
             angle: 90
         });
         //rows
         pdf.text("________________________________________________________________________________________________", 2.4, 19.5, );
         pdf.text("________________________________________________________________________________________________", 2.4, 20, );
         pdf.text("_____________________________________________________________", 8, 20.4, );
         pdf.text("________________________________________________________________________________________________", 2.4, 20.8, );
         pdf.text("_____________________________________________________________", 8, 21.2, );
         pdf.text("________________________________________________________________________________________________", 2.4, 21.6, );
         pdf.text("_____________________________________________________________", 8, 22, );
         pdf.text("________________________________________________________________________________________________", 2.4, 22.4, );
         pdf.text("________________________________________________________________________________________________", 2.4, 22.8, );
         pdf.text("________________________________________________________________________________________________", 2.4, 23.2, );
         pdf.text("_____________________________________________________________", 8, 23.6, );
         pdf.text("________________________________________________________________________________________________", 2.4, 24, );
         pdf.text("_____________________________________________________________", 8, 24.4, );
         pdf.text("________________________________________________________________________________________________", 2.4, 24.8, );
         pdf.text("________________________________________________________________________________________________", 2.4, 25.2, );
         pdf.text("________________________________________________________________________________________________", 2.4, 25.7, );
         pdf.text("________________________________________________________________________________________________", 2.4, 26.1, );
         pdf.text("________________________________________________________________________________________________", 2.4, 26.5, );
         pdf.text("________________________________________________________________________________________________", 2.4, 26.9, );
     

        // Start a new page for each record (optional)
        pdf.addPage();
    }

    // Save or open the PDF
    pdf.save("report.pdf");
};





