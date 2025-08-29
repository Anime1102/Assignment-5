document.addEventListener("DOMContentLoaded", () => {
  
  let heartCount = 0;
  const heartIcons = document.querySelectorAll(".fa-heart");
  const heartCountEl = document.getElementById("heart-count");

  heartIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      heartCount++;
      heartCountEl.textContent = heartCount;
      icon.classList.toggle("text-red-500");
    });
  });

  
  let coins = 100;
  const coinEl = document.querySelector(".navbar button:nth-child(2) h1");
  const historyContainer = document.getElementById("call-history");
  const clearBtn = document.getElementById("clear-history");

  function handleCall(serviceName, serviceNumber) {
    if (coins < 20) {
      alert("Not enough coins to make this call!");
      return;
    }

    coins -= 20;
    coinEl.textContent = coins;

    alert(`Calling ${serviceName} - ${serviceNumber}`);

    const time = new Date().toLocaleTimeString();
    const historyItem = document.createElement("div");
    historyItem.className =
      "bg-[#8080801A] rounded-[10px] mb-[10px] p-[10px] flex flex-row justify-between items-center";
    historyItem.innerHTML = `
      <div><p class="font-bold">${serviceName}</p><br>${serviceNumber}</div>
      <div><p>${time}</p></div>
    `;
    historyContainer.prepend(historyItem);
  }


  clearBtn.addEventListener("click", () => {
    historyContainer.innerHTML = "";
  });

  
  document.getElementById("call-emergency").addEventListener("click", () => {
    handleCall("National Emergency Number", "999");
  });
  document.getElementById("call-police").addEventListener("click", () => {
    handleCall("Police Helpline Number", "999");
  });
  document.getElementById("call-fire").addEventListener("click", () => {
    handleCall("Fire Service Number", "999");
  });
  document.getElementById("call-ambulance").addEventListener("click", () => {
    handleCall("Ambulance Service", "1994-999999");
  });
  document.getElementById("call-women").addEventListener("click", () => {
    handleCall("Women & Child Helpline", "109");
  });
  document.getElementById("call-corruption").addEventListener("click", () => {
    handleCall("Anti-Corruption Helpline", "106");
  });
  document.getElementById("call-electricity").addEventListener("click", () => {
    handleCall("Electricity Helpline", "16216");
  });
  document.getElementById("call-brac").addEventListener("click", () => {
    handleCall("Brac Helpline", "16445");
  });
  document.getElementById("call-railway").addEventListener("click", () => {
    handleCall("Bangladesh Railway Helpline", "163");
  });

  
let copyCount = 0;
const copyCountEl = document.getElementById("copy-count");

function handleCopy(serviceNameId, serviceNumId) {
  const serviceName = document.getElementById(serviceNameId).textContent.trim();
  const serviceNumber = document.getElementById(serviceNumId).textContent.trim();

  const input = document.createElement("input");
  input.value = serviceNumber;
  document.body.appendChild(input);
  input.select();
  navigator.clipboard.writeText(input.value);
  document.body.removeChild(input);

  alert(`Copied ${serviceName} - ${serviceNumber}`);

  copyCount++;
  copyCountEl.textContent = copyCount;
}


document.getElementById("copy-emergency").addEventListener("click", () => {
  handleCopy("name-emergency", "num-emergency");
});

document.getElementById("copy-police").addEventListener("click", () => {
  handleCopy("name-police", "num-police");
});

document.getElementById("copy-fire").addEventListener("click", () => {
  handleCopy("name-fire", "num-fire");
});

document.getElementById("copy-ambulance").addEventListener("click", () => {
  handleCopy("name-ambulance", "num-ambulance");
});

document.getElementById("copy-women").addEventListener("click", () => {
  handleCopy("name-women", "num-women");
});

document.getElementById("copy-corruption").addEventListener("click", () => {
  handleCopy("name-corruption", "num-corruption");
});

document.getElementById("copy-electricity").addEventListener("click", () => {
  handleCopy("name-electricity", "num-electricity");
});

document.getElementById("copy-brac").addEventListener("click", () => {
  handleCopy("name-brac", "num-brac");
});

document.getElementById("copy-railway").addEventListener("click", () => {
  handleCopy("name-railway", "num-railway");
});


});
