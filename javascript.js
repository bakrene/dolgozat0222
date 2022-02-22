var radiogomb;
var select;

function elso()
{
    var elso = document.getElementsByName("radiogomb");
    for(let i = 0; i < elso.length; i++)
    {
        if(elso[i].checked){
            console.log(elso[i].value);
            radiogomb = elso[i].value;
        }
    }
}

function masodik()
{ 
    var masodik = document.getElementById("masodik");
    select = masodik.options[masodik.selectedIndex].value;
    console.log(masodik.options[masodik.selectedIndex].value);
}