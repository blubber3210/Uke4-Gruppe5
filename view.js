updateView();
function updateView() {
    let html = /*HTML*/`
    ${intro}
    
    <section>
    <div id="petImage">${picture}
    </div>
    </section>
    
    
    <section>
    <div id="needsDiv">
    <button onclick="feed()"><b>feed</b></button>
    <button onclick="wash()"><b>wash</b></button>
    <button  onclick="pet()"><b>pet</b></button>
    </div>
    </section>

    <section>
    <div class="status">
    <b>Hunger</b>
    <progress id="hungerBar" value="${hunger}" max="100"></progress>
  </div>

  <div class="status">
    <b>Hygiene</b>
    <progress id="hygieneBar" value="${hygiene}" max="100"></progress>
  </div>

  <div class="status">
    <b>Mood:</b>
    <progress id="boredomBar" value="${mood}" max="100"></progress>
  </div>
    </section>
  
    <section id="statsSection">
    <div id="stats"><b>${petName}</b><br>
    ${message} <br>
    Age: ${age} <br>
    </div>
    <section>
    
    
    `;

    app.innerHTML = html;
    hungerBar.value = hunger;
    hygieneBar.value = hygiene;
    boredomBar.value = mood;
    danger()
}