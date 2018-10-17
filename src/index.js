import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cheese from './reactCheese';
import './index.css';

class MyApp extends React.Component {
    constructor(props) {
    super(props)
}

render() {
    return (
    <div className="container shadow bg-white h-100">
        <h1 class="title text-center pt-2">
        <Cheese /><br/>
        ReactCheese</h1>
        <p>
        <b>ReactCheese</b> is a participation for Stackoverflow's <a href='https://meta.stackexchange.com/questions/316515/who-cut-the-cheese?cb=1' target='_blank'>Cheese Overflow 2018</a> .
        <br />
        <b>ReactCheese</b> is ReactJS component for Cheese lovers ! . You can add your awesome cheese anywhere inside your application . And its flixable !
        <br />
        </p>
        <b>#Basic Usage :</b>
        <div className="row mt-2">
            <div className="col code">
                {"<Cheese />"}
            </div>
            <div className="col">
                <Cheese />
            </div>
        </div>
        <b>#Options :</b><br/>
        <b className="pl-3">- Size :</b><i> (Default is large)</i>
        <div className="row mt-2">
            <div className="col code">
                {"<Cheese size='tiny' />"}
            </div>
            <div className="col">
                <Cheese size='tiny' />
            </div>
        </div>
        <div className="row mt-2">
            <div className="col code">
                {"<Cheese size='small' />"}
            </div>
            <div className="col">
                <Cheese size='small' />
            </div>
        </div>
        <div className="row mt-2">
            <div className="col code">
                {"<Cheese size='medium' />"}
            </div>
            <div className="col">
                <Cheese size='medium' />
            </div>
        </div>
        <div className="row mt-2">
            <div className="col code">
                {"<Cheese size='large' /> OR <Cheese />"}
            </div>
            <div className="col">
                <Cheese size='large' />
            </div>
        </div>        
        <div className="row mt-2">
            <div className="col code">
                {"<Cheese size='xlarge' />"}
            </div>
            <div className="col">
                <Cheese size='xlarge' />
            </div>
        </div>     
        <div className="row mt-2">
            <div className="col code">
                {"<Cheese size='xxlarge' />"}
            </div>
            <div className="col">
                <Cheese size='xxlarge' />
            </div>
        </div> 
        <b>#Additional awesome options :</b><br/>
        <b className="pl-3">- Musty Cheese (yucky) :</b>
        <div className="row mt-2">
            <div className="col code">
                {"<Cheese musty={true} />"}
            </div>
            <div className="col">
                <Cheese musty={true} />
            </div>
        </div>     
        <b className="pl-3">- With bite :</b>
        <div className="row mt-2">
            <div className="col code">
                {"<Cheese bite={true} />"}
            </div>
            <div className="col">
                <Cheese bite={true} />
            </div>
        </div> 
        <b className="pl-3">- In Love :</b>
        <div className="row mt-2">
            <div className="col code">
                {"<Cheese inLove={true} />"}
            </div>
            <div className="col">
                <Cheese inLove={true} />
            </div>
        </div>    
        <b className="pl-3">- Angry :</b>
        <div className="row mt-2">
            <div className="col code">
                {"<Cheese angry={true} />"}
            </div>
            <div className="col">
                <Cheese angry={true} />
            </div>
        </div>  
        <b>#Options matrix :</b><br/>     
        <div className="row mt-2">
            <div className="col">#</div>
            <div className="col">Tiny</div>
            <div className="col">Small</div>
            <div className="col">Medium</div>
            <div className="col">Large</div>
            <div className="col">XLarge</div>
            <div className="col">XXLarge</div>
        </div> 
        <div className="row mt-2">
            <div className="col">Musty</div>
            <div className="col"><Cheese size="tiny" musty={true} /></div>
            <div className="col"><Cheese size="small" musty={true} /></div>
            <div className="col"><Cheese size="medium" musty={true}/></div>
            <div className="col"><Cheese size="large" musty={true}/></div>
            <div className="col"><Cheese size="xlarge" musty={true}/></div>
            <div className="col"><Cheese size="xxlarge" musty={true}/></div>
        </div>  
        <div className="row mt-2">
            <div className="col">Bite</div>
            <div className="col"><Cheese size="tiny" bite={true} /></div>
            <div className="col"><Cheese size="small" bite={true} /></div>
            <div className="col"><Cheese size="medium" bite={true}/></div>
            <div className="col"><Cheese size="large" bite={true}/></div>
            <div className="col"><Cheese size="xlarge" bite={true}/></div>
            <div className="col"><Cheese size="xxlarge" bite={true}/></div>
        </div>  
        <div className="row mt-2">
            <div className="col">InLove</div>
            <div className="col"><Cheese size="tiny" inLove={true} /></div>
            <div className="col"><Cheese size="small" inLove={true} /></div>
            <div className="col"><Cheese size="medium" inLove={true}/></div>
            <div className="col"><Cheese size="large" inLove={true}/></div>
            <div className="col"><Cheese size="xlarge" inLove={true}/></div>
            <div className="col"><Cheese size="xxlarge" inLove={true}/></div>
        </div>  
        <div className="row mt-2">
            <div className="col">Angry</div>
            <div className="col"><Cheese size="tiny" angry={true} /></div>
            <div className="col"><Cheese size="small" angry={true} /></div>
            <div className="col"><Cheese size="medium" angry={true}/></div>
            <div className="col"><Cheese size="large" angry={true}/></div>
            <div className="col"><Cheese size="xlarge" angry={true}/></div>
            <div className="col"><Cheese size="xxlarge" angry={true}/></div>
        </div>  
        <b>#Options mixed up :</b><br/>    
        <div className="row mt-2">
            <div className="col code">
                {"<Cheese inLove={true} bite={true} />"}
            </div>
            <div className="col">
                <Cheese inLove={true} bite={true} />
            </div>
        </div>     
        <div className="row mt-2">
            <div className="col code">
                {"<Cheese angry={true} musty={true} />"}
            </div>
            <div className="col">
                <Cheese angry={true} musty={true} />
            </div>
        </div> 
        <b>#Usage examples :</b><br/>
        <b className="pl-3">- Inline text :</b>
        <p>
        <blockquote>Age is something that doesn't matter, unless you are a <Cheese size="tiny"/>. <br/><i>Luis Bunuel</i></blockquote>
        </p>
        <b className="pl-3">- Chatting conversation  :</b>
        <div className="row w-75">
            <div className="col-1"><Cheese size="small" bite={true} /></div>
            <div className="col-11 text-left">Hi , How are you sweetheart !</div>
        </div>
        <div className="row w-75">
            <div className="col-11 text-right">Oooh , I'm fine :)</div>
            <div className="col-1"><Cheese size="small" inLove={true} /></div>
        </div>  
        <b className="pl-3">- Stackoverflow users avatar :</b><br/> 
        <div className="sofProfile">
            asked Oct 9 at 14:45
            <div className="row">
                <div className="col-5"><Cheese size="medium" bite={true} /></div>
                <div className="col-7"><a href="https://stackoverflow.com/users/1140136/ashraf">Ashraf</a><br/><b>101k</b></div>
            </div>
        </div>
        <b>#Credits :</b><br/> 
        Thanks for <a href='https://codepen.io/HugoGiraudel/pen/Ewger'>https://codepen.io/HugoGiraudel/pen/Ewger</a> And <a href='https://codepen.io/Abobakr/pen/NRRNbk'>https://codepen.io/Abobakr/pen/NRRNbk</a>
    </div>
    )
}

}

ReactDOM.render(<MyApp />, document.querySelector("#root"))