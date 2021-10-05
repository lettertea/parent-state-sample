import React, {ChangeEventHandler, FormEvent} from 'react';
import {IState as Props} from "../App";

interface IProps {
    input: string
    handleChange: ChangeEventHandler<HTMLInputElement>
    handleSubmit: (submission: string) => (e: FormEvent<HTMLFormElement>) => void
}

function ChildB(props: IProps) {
    return (
        <form onSubmit={props.handleSubmit(props.input)}><label>
            ChildB Input Field:
            <input type="text" value={props.input} onChange={props.handleChange}/> </label>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default ChildB;
