var gomb;
var select;
var barca;
var boris;

function elso()
{
    var elso = document.getElementsByName("gomb");
    for(let i = 0; i < elso.length; i++)
    {
        if(elso[i].checked){
            console.log(elso[i].value);
            gomb = elso[i].value;
        }
    }
}

function masodik()
{ 
    var masodik = document.getElementById("masodik");
    select = masodik.options[masodik.selectedIndex].value;
    console.log(masodik.options[masodik.selectedIndex].value);
}

function negyedik()
{
    var negyedik = document.getElementById("negyedik");
    barca = negyedik;
    console.log(barca);
}

function otodik(){
    var otodik = documnet.getElementById("otodik");
    boris = otodik;
    console.log(boris);
}