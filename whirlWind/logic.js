function createWarrantyPage(){
    let element;
    let label;

    element = document.createElement('h3');
    element.innerHTML = '<h3>WhirlWind Warranty Registration</h3>'
    document.body.appendChild(element);    

    element = document.createElement('p');
    element.innerHTML = '<p>Streamline the repair process by completing your warranty registration today.</p>'
    document.body.appendChild(element);

    element = document.createElement('h2')
    element.innerHTML = 'Contact Information'
    document.body.appendChild(element)

    label = document.createElement('label');
    label.innerHTML = 'First Name'
    document.body.appendChild(label)
    element = document.createElement('input');
    element.setAttribute('type', 'text')
    document.body.appendChild(element);

    label = document.createElement('label');
    label.innerHTML = 'Last Name'
    document.body.appendChild(label)
    element = document.createElement('input');
    element.setAttribute('type', 'text')
    document.body.appendChild(element);

    label = document.createElement('label');
    label.innerHTML = 'Company Name'
    document.body.appendChild(label)
    element = document.createElement('input');
    element.setAttribute('type', 'text')
    document.body.appendChild(element);


    label = document.createElement('label');
    label.innerHTML = 'Email'
    document.body.appendChild(label)
    element = document.createElement('input');
    element.setAttribute('type', 'text')
    document.body.appendChild(element);

    label = document.createElement('label');
    label.innerHTML = 'Phone Number'
    document.body.appendChild(label)
    element = document.createElement('input');
    element.setAttribute('type', 'text')
    document.body.appendChild(element);

    label = document.createElement('label');
    label.innerHTML = 'Fax Number'
    document.body.appendChild(label)
    element = document.createElement('input');
    element.setAttribute('type', 'text')
    document.body.appendChild(element);

    label = document.createElement('label');
    label.innerHTML = 'Address'
    document.body.appendChild(label)
    element = document.createElement('input');
    element.setAttribute('type', 'text')
    document.body.appendChild(element);

    label = document.createElement('label');
    label.innerHTML = 'City'
    document.body.appendChild(label)
    element = document.createElement('input');
    element.setAttribute('type', 'text')
    document.body.appendChild(element);

    label = document.createElement('label');
    label.innerHTML = 'Zip'
    document.body.appendChild(label)
    element = document.createElement('input');
    element.setAttribute('type', 'text')
    document.body.appendChild(element);

    label = document.createElement('label');
    label.innerHTML = 'Country'
    document.body.appendChild(label)
    element = document.createElement('input');
    element.setAttribute('type', 'text')
    document.body.appendChild(element);

    element = document.createElement('h3');
    element.innerHTML = '<h3>Unit Information</h3>'
    document.body.appendChild(element);  

    label = document.createElement('label');
    label.innerHTML = 'Date of Purchase'
    document.body.appendChild(label)
    element = document.createElement('input');
    element.setAttribute('type', 'text')
    document.body.appendChild(element);

    label = document.createElement('label');
    label.innerHTML = 'Model'
    document.body.appendChild(label)
    element = document.createElement('input');
    element.setAttribute('type', 'text')
    document.body.appendChild(element);

    label = document.createElement('label');
    label.innerHTML = 'Warranty Serial Number'
    document.body.appendChild(label)
    element = document.createElement('input');
    element.setAttribute('type', 'text')
    document.body.appendChild(element);

var button = document.createElement("button")
button.innerHTML = "save"

var body = document.getElementsByTagName('body')[0];
body.appendChild(button)

button.addEventListener ("click", function(){
    alert('saved')
})

var button = document.createElement("button")
button.innerHTML = "Close"

var body = document.getElementsByTagName('body')[0];
body.appendChild(button)

button.addEventListener ("click", function(){
    alert('closed')
})


}

createWarrantyPage()