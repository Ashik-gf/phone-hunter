const loadphone = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones)
    
}
const displayPhone = phones =>{
const phoneBox = document.getElementById('phobeBoxContainer')
 phones.forEach(phone => {
//   step 1: create a div

    const phoneCardContiner = document.createElement('div')
    phoneCardContiner.classList=`card  bg-gray-100 shadow-xl`
    phoneCardContiner.innerHTML =`
    <figure><img src="${phone.image}" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${phone.phone_name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>
    `
    phoneBox.appendChild(phoneCardContiner);
    console.log(phone)


    
});



}




loadphone()