document.querySelector('.get-jokes').addEventListener('click',getjokes);

function getjokes(e){
    const number=document.querySelector('input').value;

    const xhr=new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
    xhr.onload=function(){
        if(this.status===200){
        const response=JSON.parse(this.response);
        let output='';
        var input=document.getElementById('number').value;
        if(response.type==='success' && number!=''){
        response.value.forEach(values=>{
            output+=`
            <li>${values.joke}</li>`;
        });
    }else{
        output+=`
        <li style="color:red"><h5>Please enter a number</h5> </li>`;
    }
        document.querySelector('.jokes').innerHTML=output;
   
    }
        
    }
    xhr.send();
e.preventDefault();
}
