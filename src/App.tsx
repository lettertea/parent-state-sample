import React, {ChangeEvent, FormEvent, useState} from 'react';
import './App.css';
import ChildA from './pages/ChildA';
import ChildB from './pages/ChildB';

import {Container} from 'react-bootstrap'
import {Route, Switch} from 'react-router-dom'

// Layout
import Layout from './Layout'

export interface IState {
    ChildA: any
    ChildB: any
}

function App() {
    const [state, setState] = useState<IState>({ChildA: {}, ChildB: {}})

    const handleChange = (componentName: keyof IState) => (e: ChangeEvent<HTMLInputElement>) => {
        setState({...state, [componentName]: {...state[componentName], input: e.target.value}})
    }

    const handleSubmit = (componentName: keyof IState) => (submission: string) => (e: FormEvent<HTMLFormElement>) => {
        setState({...state, [componentName]: {...state[componentName], ui: submission}})
        e.preventDefault()
    }

    // https://reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime
    const COMPONENTS: IState = {
        ChildA: ChildA,
        ChildB: ChildB
    }

    const RenderChildComponent = (componentName: keyof IState, props?: any) => {
        const ChildComponent = COMPONENTS[componentName]
        return (<div>
            <ChildComponent handleChange={handleChange(componentName)}
                            input={state[componentName].input}
                            handleSubmit={handleSubmit(componentName)}
                            {...props}
            />
            {state[componentName].ui}
        </div>)
    }

    return (
        <Layout>
            <Container>
                <Switch>
                    <Route path='/ChildA'> {RenderChildComponent("ChildA")} </Route>
                    <Route path='/ChildB'> {RenderChildComponent("ChildB")} </Route>
                </Switch>
            </Container>
        </Layout>
    );
}

export default App;
