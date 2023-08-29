// step1: make loded fetch file

const loadphone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  // step1.2: for display the data in web
  displayPhone(phones);
  // console.log(phones)
};
const displayPhone = (phones) => {
  // console.log(phones)
  const phoneBox = document.getElementById("phobeBoxContainer");

  // clear the phone box afetr the search
  phoneBox.innerHTML = "";
  const showAllContainer = document.getElementById("showallcontainer");

  if (phones.length > 12) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }
  phones = phones.slice(0, 12);

  // if you want to showb 0-10 card

  phones.forEach((phone) => {
    console.log(phone);
    //   step 2: create a div
    const phoneCardContiner = document.createElement("div");
    // step 3: give classlist
    phoneCardContiner.classList = `card  bg-gray-100 shadow-xl`;
    // step4: set InnerText of inner HTML
    phoneCardContiner.innerHTML = `
    <figure><img src="${phone.image}" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${phone.phone_name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>
    `;
    // append Child for in created div
    phoneBox.appendChild(phoneCardContiner);
  });
};

// heandelsearch
getSearchitem = () => {
  const searchtext = document.getElementById("search-value");
  const searchText = searchtext.value;
  // console.log(searchValue)
  loadphone(searchText);
};

loadphone();
