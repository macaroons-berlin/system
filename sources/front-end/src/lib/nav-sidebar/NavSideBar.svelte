<style>
  section {
    display: flex;
    flex-direction: column; 
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 20vw;

    background-color: hsl(0, 0%, 0%);
  }

  section li {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sidebar-controls,
  .sidebar-controls-categories {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    height: 4rem;
  }

  .sidebar-controls {
    padding: 0.5vw;
  }
  
  .sidebar-controls ul {
    display: flex;
    list-style-type: none;
  }

  .sidebar-controls > li {
    display: flex;
  }

  .sidebar-controls-categories-container {
    display: flex;
    flex: 3 0 auto;
  }

  .sidebar-controls-categories-container > ul {
    flex: 1 0 auto;
  }

  .sidebar-controls-close-container {
    display: flex;
    flex: 1 0 auto;
    justify-self: flex-end;
    justify-content: flex-end;
    /* padding: 0 0.5vw 0 0; */
  }

  .sidebar-controls-categories-container,
  .sidebar-controls-close-container {
    height: 100%;
  }

  .sidebar-controls-categories > li {
    flex: 1 0 auto;
    height: 100%;
  }

  .sidebar-controls-close {
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    align-items: center;
    height: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .sidebar-controls-close:hover {
    color: var(--accent-color);
    transition: color 0.125s linear;
  }
</style>

<section>
  <ul class='sidebar-controls'>
    <li class='sidebar-controls-categories-container'>
      <ul class='sidebar-controls-categories nav-text'>
        <li>uni</li>
        <li>women</li>
        <li>men</li>
      </ul>
    </li>
    <li class='sidebar-controls-close-container'>
      <button class='sidebar-controls-close nav-text'>&times;</button>
    </li>
  </ul>
  <ul>
  </ul>
</section>