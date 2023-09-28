// submit, first it will check all the fields and necessary validations and then a popup will appear
// displaying all the selected values with label in front of it. On closing the popup, form should reset
// all the values. Use the following for reference
let reset = document.getElementById('reset');
let submit = document.getElementById('submit');
let error = document.getElementById('hidden');
reset.addEventListener('click', () => {
    location.reload();
})
let specialchar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', "=", '_', '{', '[', '}', ']', '|', ':', '?', '/', '.', '>', '<', ',', '`', '~', '\\', '\'']

var ids = document.querySelectorAll('input');
console.log(ids);
let idArr = new Array();
for (item of ids) {
    idArr.push(item.id);
}
let finalresult = "";

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let notfilled = false;
    for (let i = 0; i < idArr.length; i++) {
        let myid = document.getElementById(idArr[i]);
        input = myid.value;
        if (input == '') {
            notfilled = true;
            error.style = "display:block";
            error.innerHTML = ("Please fill your" + idArr[i]);
            break;
        }
        else {
            finalresult = finalresult + "\n " + idArr[i] + ": " + input + ".";
        }

    }
    if (notfilled == false) {
        alert(finalresult);
        location.reload();
    }
 

})
let iserror = false;
let country = "";

function basicCheck() {
   iserror=false;
   error.style.display='none';
    for (let j = 0; j < idArr.length; j++) {
        let input = document.getElementById(idArr[j]);
        input = input.value;
         if (input != '') {
            let firstname = input;
            console.log(firstname);
            for (let i = 0; i < specialchar.length; i++) {
                if (firstname.includes(specialchar[i])) {
                    if (idArr[j] == 'email' && (specialchar[i] == '@' || specialchar[i] == '.')) {
                        continue;
                    }
                    else {
                        error.style.display = 'block';
                        iserror = true;
                        break;
                    }

                  
                }

            }
        }
        if(iserror==true)
        break;
    }
}
let mob=document.getElementById('mob').innerText;
function mobCheck()
{
    error.style.display="none";
    let country=document.getElementById('country').value;
    console.log(country);
    if(country=='India')
    {
        if(mob.length!=10)
        {
            error.style.display="block";
            error.innerHTML="The mobile number should be of 10 digits"
        }
       
    }
    setTimeout(()=>{
        error.style.display="none"
    }, 1000);
}
