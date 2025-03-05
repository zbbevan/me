
(() => {
  const Filters = (props) => {
    let updateFormat = (clickEvent) => {
      props.updateFormState({
        favformat: clickEvent.target.value,
      });
    }
    let updateColor = (clickEvent) => {
      props.updateFormState({
        favcolor: clickEvent.target.value,
      });
    }
    let updateLocation = (clickEvent) => {
      props.updateFormState({
        where: clickEvent.target.value,
      });
    }
    let updateIntro = (clickEvent) => {
      props.updateFormState({
        introduced: clickEvent.target.value,
      });
    }
    return (
      <React.Fragment>
        <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
          <b>Introduced</b>
          </div>
          <div className='col-md-3'>
            <select className='custom-options'
              onChange={updateIntro}
            >
                <option></option>
                <option>Friends</option>
                <option>Online Influence</option>
                <option>Other TCGs (Pokemon, YuGiOh, etc)</option>
                <option>The MTG Arena Game</option>
              </select>
          </div>
          <div className='col-md-3'>
            <b>Where to play?</b>
          </div>
          <div className='col-md-2'>
          <select className='custom-options' onChange={updateLocation}>
          <option></option>
              <option>Casual Play w/ Friends</option>
              <option>Online MTG/Arena</option>
              <option>Play at local game stores/official MTG events</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <b>Format</b>
          </div>
          <div className='col-md-3'>
            <select className='custom-options'
              onChange={updateFormat}
            >
              <option></option>
              <option>Commander</option>
              <option>Standard</option>
              <option>Modern</option>
              <option>Other</option>
            </select>
          </div>
          <div className='col-md-3'>
            <b>Color</b>
          </div>
          <div className='col-md-2'>
            <select className='custom-options' onChange={updateColor}>
              <option></option>
              <option>Blue</option>
              <option>Black</option>
              <option>Green</option>
              <option>Red</option>
              <option>White</option>
            </select>
          </div>
        </div>
        </div>
      </React.Fragment>
    )
  }
  const DataTable = (props) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>MTG Survey Responses</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2"></div>
          <div id="mtgTable" className="col-md-12 table-responsive"><table className="table text-center table-striped">
            <thead>
              <tr>
                <th>Introduced</th>
                <th>Where they play</th>
                <th>Favorite Format</th>
                <th>Favorite MTG Color</th>
                <th>Favorite Combination</th>
                <th>Least Favorite Colors</th>
              </tr>
            </thead>
            <tbody>{props.dataToDisplay.map((row, i) => {
              return (
                <tr key={i}>
                  <td>{row.introduced}</td>
                  <td>{row.where}</td>
                  <td>{row.favformat}</td>
                  <td>{row.favcolor}</td>
                  <td>{row.favcombo}</td>
                  <td>{row.leastfav}</td>
                </tr>
              );
            })}</tbody></table></div>
          <div className="col-md-2"></div>
        </div>
      </div>
    )
  }

  class ReactDataTable extends React.Component {
    constructor(props) {
      super(props);
      //Setting up the new property for our class
      this.originalData = props.originalData;
      this.state = {
        introduced: '',
        where: '',
        favformat: '',
        favcolor: '',
        leastfav: ''
      };

      this.updateFormState = this.updateFormState.bind(this);
    }

    updateFormState(specification) {
      this.setState(specification);
    }
    render() {
      let filteredData = this.originalData;

      if (this.state.favformat !== '') {
        filteredData = filteredData.filter((row) => row.favformat === this.state.favformat
        );
      }
      if (this.state.favcolor !== '') {
        filteredData = filteredData.filter((row) => row.favcolor === this.state.favcolor
        );
      }
      if (this.state.where !== '') {
        filteredData = filteredData.filter((row) => row.where === this.state.where
        );
      }
      if (this.state.introduced !== '') {
        filteredData = filteredData.filter((row) => row.introduced === this.state.introduced
        );
      }
      return (
        <React.Fragment>
          <Filters
            updateFormState={this.updateFormState}
          />

          <hr />

          <DataTable
            dataToDisplay={filteredData}
          />
        </React.Fragment>
      );
    }

  }

  const magicData = [
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Red",
      "favcombo": "Azorius (Blue White)",
      "leastfav": "Blue, Black"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Modern",
      "favcolor": "Green",
      "favcombo": "Selesnya (White Green)",
      "leastfav": "White, Black"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Selesnya (White Green)",
      "leastfav": "White, Black"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Vintage",
      "favcolor": "Blue",
      "favcombo": "Rakdos (Black Red)",
      "leastfav": "Green, Blue"
    },
    {
      "introduced": "Online Influence",
      "where": "Online MTG/Arena",
      "favformat": "Standard",
      "favcolor": "Blue",
      "favcombo": "Selesnya (White Green)",
      "leastfav": "Red"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Dimir (Blue Black)",
      "leastfav": "White"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Dimir (Blue Black)",
      "leastfav": "Red"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Orzhov (White Black)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Online Influence",
      "where": "Online MTG/Arena",
      "favformat": "Pioneer",
      "favcolor": "Red",
      "favcombo": "Rakdos (Black Red)",
      "leastfav": "Green"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "limited. Sealed/draft",
      "favcolor": "White",
      "favcombo": "Azorius (Blue White)",
      "leastfav": "Green, Black"
    },
    {
      "introduced": "Other TCGs (Pokemon, YuGiOh, etc)",
      "where": "Casual Play w/ Friends",
      "favformat": "Cube",
      "favcolor": "White",
      "favcombo": "Orzhov (White Black)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Modern",
      "favcolor": "Black",
      "favcombo": "Golgari (Black Green)",
      "leastfav": "Blue, White"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Modern",
      "favcolor": "Blue",
      "favcombo": "Izzet (Blue Red)",
      "leastfav": "Blue, White"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Cube",
      "favcolor": "Black",
      "favcombo": "Golgari (Black Green)",
      "leastfav": "White"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Alchemy",
      "favcolor": "Green",
      "favcombo": "Gruul (Red Green)",
      "leastfav": "Black"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Blue",
      "favcombo": "Azorius (Blue White)",
      "leastfav": "Green"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Standard",
      "favcolor": "Red",
      "favcombo": "Rakdos (Black Red)",
      "leastfav": "White"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Blue",
      "favcombo": "Izzet (Blue Red)",
      "leastfav": "Green"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Gruul (Red Green)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Golgari (Black Green)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Azorius (Blue White)",
      "leastfav": "Black"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "Red",
      "favcombo": "Gruul (Red Green)",
      "leastfav": "White"
    },
    {
      "introduced": "Other TCGs (Pokemon, YuGiOh, etc)",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Red",
      "favcombo": "Rakdos (Black Red)",
      "leastfav": "Green"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Historic",
      "favcolor": "Black",
      "favcombo": "Golgari (Black Green)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Standard",
      "favcolor": "Blue",
      "favcombo": "Azorius (Blue White)",
      "leastfav": "Green, Red"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Standard",
      "favcolor": "White",
      "favcombo": "Orzhov (White Black)",
      "leastfav": "Blue, Red"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Pioneer/Explorer",
      "favcolor": "Red",
      "favcombo": "Simic (Green Blue)",
      "leastfav": "Blue, Black"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Blue",
      "favcombo": "Dimir (Blue Black)",
      "leastfav": "Green, Red"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "White",
      "favcombo": "Dimir (Blue Black)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Red",
      "favcombo": "Boros (Red White)",
      "leastfav": "Black"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Drafts",
      "favcolor": "White",
      "favcombo": "Boros (Red White)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Blue",
      "favcombo": "Orzhov (White Black)",
      "leastfav": "Green"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Gruul (Red Green)",
      "leastfav": "White, Black"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Red",
      "favcombo": "Gruul (Red Green)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "White",
      "favcombo": "Selesnya (White Green)",
      "leastfav": "Blue, Black"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Limited",
      "favcolor": "Blue",
      "favcombo": "Dimir (Blue Black)",
      "leastfav": "Red, Black"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Gruul (Red Green)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Other TCGs (Pokemon, YuGiOh, etc)",
      "where": "Online MTG/Arena",
      "favformat": "Standard",
      "favcolor": "Blue",
      "favcombo": "Dimir (Blue Black)",
      "leastfav": "White"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Rakdos (Black Red)",
      "leastfav": "Green"
    },
    {
      "introduced": "Online Influence",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "Blue",
      "favcombo": "Simic (Green Blue)",
      "leastfav": "Red, White"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Golgari (Black Green)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Golgari (Black Green)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Blue",
      "favcombo": "Simic (Green Blue)",
      "leastfav": "White, Black"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Standard",
      "favcolor": "Blue",
      "favcombo": "Dimir (Blue Black)",
      "leastfav": "Blue, White"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Casual 60-card",
      "favcolor": "Green",
      "favcombo": "Golgari (Black Green)",
      "leastfav": "Blue, Black"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "Blue",
      "favcombo": "Izzet (Blue Red)",
      "leastfav": "Green, Black"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Commander",
      "favcolor": "Blue",
      "favcombo": "Izzet (Blue Red)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "White",
      "favcombo": "Selesnya (White Green)",
      "leastfav": "Red"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Red",
      "favcombo": "Boros (Red White)",
      "leastfav": "Green, Blue"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Izzet (Blue Red)",
      "leastfav": "Green, White"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Standard",
      "favcolor": "Black",
      "favcombo": "Golgari (Black Green)",
      "leastfav": "Blue, White"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Red",
      "favcombo": "Gruul (Red Green)",
      "leastfav": "White"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "Blue",
      "favcombo": "Simic (Green Blue)",
      "leastfav": "Black"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Simic (Green Blue)",
      "leastfav": "Black"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Blue",
      "favcombo": "Dimir (Blue Black)",
      "leastfav": "White"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Golgari (Black Green)",
      "leastfav": "Red, White"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Simic (Green Blue)",
      "leastfav": "Red"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Standard",
      "favcolor": "Black",
      "favcombo": "Dimir (Blue Black)",
      "leastfav": "Red, White"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Standard",
      "favcolor": "Red",
      "favcombo": "Boros (Red White)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "Red",
      "favcombo": "Golgari (Black Green)",
      "leastfav": "Blue, Black"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Izzet (Blue Red)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Golgari (Black Green)",
      "leastfav": "Red"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Golgari (Black Green)",
      "leastfav": "Red, White"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Blue",
      "favcombo": "Simic (Green Blue)",
      "leastfav": "Blue, Red"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Dimir (Blue Black)",
      "leastfav": "Blue, Black"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Dimir (Blue Black)",
      "leastfav": "White"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Modern",
      "favcolor": "Green",
      "favcombo": "Selesnya (White Green)",
      "leastfav": "Blue, Black"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Boros (Red White)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Dimir (Blue Black)",
      "leastfav": "Blue, Black"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Selesnya (White Green)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Standard",
      "favcolor": "Black",
      "favcombo": "Izzet (Blue Red)",
      "leastfav": "Green, White"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Golgari (Black Green)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "White",
      "favcombo": "Azorius (Blue White)",
      "leastfav": "Blue, Black"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Gruul (Red Green)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Blue",
      "favcombo": "Azorius (Blue White)",
      "leastfav": "White, Black"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Golgari (Black Green)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Standard",
      "favcolor": "Green",
      "favcombo": "Dimir (Blue Black)",
      "leastfav": "White"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Legacy",
      "favcolor": "Black",
      "favcombo": "Dimir (Blue Black)",
      "leastfav": "Red"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Gruul (Red Green)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Blue",
      "favcombo": "Azorius (Blue White)",
      "leastfav": "White, Black"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Standard",
      "favcolor": "White",
      "favcombo": "Boros (Red White)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Modern",
      "favcolor": "Red",
      "favcombo": "Izzet (Blue Red)",
      "leastfav": "White"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Simic (Green Blue)",
      "leastfav": "Blue, Red"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Modern",
      "favcolor": "Blue",
      "favcombo": "Izzet (Blue Red)",
      "leastfav": "Green, Black"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "White",
      "favcombo": "Azorius (Blue White)",
      "leastfav": "Black"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Standard",
      "favcolor": "Black",
      "favcombo": "Golgari (Black Green)",
      "leastfav": "White"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Golgari (Black Green)",
      "leastfav": "Red"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Red",
      "favcombo": "Golgari (Black Green)",
      "leastfav": "Blue, White"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Golgari (Black Green)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Dimir (Blue Black)",
      "leastfav": "White"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "Blue",
      "favcombo": "Azorius (Blue White)",
      "leastfav": "Green"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Standard",
      "favcolor": "White",
      "favcombo": "Gruul (Red Green)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Red",
      "favcombo": "Simic (Green Blue)",
      "leastfav": "Blue, Black"
    },
    {
      "introduced": "Other TCGs (Pokemon, YuGiOh, etc)",
      "where": "Online MTG/Arena",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Selesnya (White Green)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Red",
      "favcombo": "Rakdos (Black Red)",
      "leastfav": "Green"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "White",
      "favcombo": "Orzhov (White Black)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Other TCGs (Pokemon, YuGiOh, etc)",
      "where": "Online MTG/Arena",
      "favformat": "Brawl",
      "favcolor": "Black",
      "favcombo": "Rakdos (Black Red)",
      "leastfav": "White"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Gruul (Red Green)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Legacy",
      "favcolor": "White",
      "favcombo": "Boros (Red White)",
      "leastfav": "Green, Black"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Selesnya (White Green)",
      "leastfav": "Blue, Black"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Azorius (Blue White)",
      "leastfav": "Black"
    },
    {
      "introduced": "Online Influence",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "White",
      "favcombo": "Rakdos (Black Red)",
      "leastfav": "Green"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Rakdos (Black Red)",
      "leastfav": "Green"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "White",
      "favcombo": "Orzhov (White Black)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Commander",
      "favcolor": "Blue",
      "favcombo": "Izzet (Blue Red)",
      "leastfav": "Blue, Black"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Blue",
      "favcombo": "Rakdos (Black Red)",
      "leastfav": "White"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Golgari (Black Green)",
      "leastfav": "Blue, Black"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Orzhov (White Black)",
      "leastfav": "Blue, White"
    },
    {
      "introduced": "Online Influence",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "White",
      "favcombo": "Boros (Red White)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Golgari (Black Green)",
      "leastfav": "Blue, Red"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Golgari (Black Green)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Dimir (Blue Black)",
      "leastfav": "Green, White"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "Red",
      "favcombo": "Izzet (Blue Red)",
      "leastfav": "Black"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Selesnya (White Green)",
      "leastfav": "Blue, Black"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Red",
      "favcombo": "Boros (Red White)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Orzhov (White Black)",
      "leastfav": "Red"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Rakdos (Black Red)",
      "leastfav": "Blue, White"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Gruul (Red Green)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "White",
      "favcombo": "Orzhov (White Black)",
      "leastfav": "Blue, Red"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Dimir (Blue Black)",
      "leastfav": "White"
    },
    {
      "introduced": "Other TCGs (Pokemon, YuGiOh, etc)",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Orzhov (White Black)",
      "leastfav": "Blue, Red"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Simic (Green Blue)",
      "leastfav": "Black"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Modern",
      "favcolor": "Red",
      "favcombo": "Izzet (Blue Red)",
      "leastfav": "Blue"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Red",
      "favcombo": "Rakdos (Black Red)",
      "leastfav": "Green, Blue"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Standard",
      "favcolor": "Blue",
      "favcombo": "Simic (Green Blue)",
      "leastfav": "Red, Black"
    },
    {
      "introduced": "Friends",
      "where": "Play at local game stores/official MTG events",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Orzhov (White Black)",
      "leastfav": "Green"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Boros (Red White)",
      "leastfav": "Black"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Commander",
      "favcolor": "White",
      "favcombo": "Selesnya (White Green)",
      "leastfav": "Blue, Red"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Standard",
      "favcolor": "Blue",
      "favcombo": "Dimir (Blue Black)",
      "leastfav": "Blue, Red"
    },
    {
      "introduced": "Other TCGs (Pokemon, YuGiOh, etc)",
      "where": "Online MTG/Arena",
      "favformat": "Standard",
      "favcolor": "Green",
      "favcombo": "Gruul (Red Green)",
      "leastfav": "Blue, Black"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Commander",
      "favcolor": "White",
      "favcombo": "Orzhov (White Black)",
      "leastfav": "Blue, Red"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "White",
      "favcombo": "Boros (Red White)",
      "leastfav": "Green, Black"
    },
    {
      "introduced": "Friends",
      "where": "Casual Play w/ Friends",
      "favformat": "Commander",
      "favcolor": "Black",
      "favcombo": "Simic (Green Blue)",
      "leastfav": "Red"
    },
    {
      "introduced": "Friends",
      "where": "Online MTG/Arena",
      "favformat": "Timeless Play (MTG Arena)",
      "favcolor": "White",
      "favcombo": "Selesnya (White Green)",
      "leastfav": "Blue, Black"
    },
    {
      "introduced": "The MTG Arena Game",
      "where": "Online MTG/Arena",
      "favformat": "Commander",
      "favcolor": "Green",
      "favcombo": "Selesnya (White Green)",
      "leastfav": "Black"
    }
  ]


  const container = document.getElementById("react-data-table");
  const root = ReactDOM.createRoot(container);
  root.render(<ReactDataTable originalData={magicData} />);


})();