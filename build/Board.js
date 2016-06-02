
class Board extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.eachNote = this.eachNote.bind(this);
        this.add = this.add.bind(this);
        this.state = {
            notes: []
        };
    }

    nextId() {
        this.uniqueId = this.uniqueId||0;
        return this.uniqueId++;
    }

    update(newText,i) {
        var arr = this.state.notes;
        console.log(newText);
        arr[i].note = newText;
        this.setState({notes:arr});
    }

    remove(i) {
        var arr = this.state.notes;
        arr.splice(i,1);
        this.setState({notes:arr});

    }

    add(text) {
        var arr = this.state.notes;
        arr.push({id: this.nextId(), note: 'New Note'});
        this.setState({notes:arr});
    }

    eachNote(note,i) {
        return (
            <Note key={note.id} index={i} onChange={this.update} onRemove={this.remove}>{note.note}</Note>
            );
    }

    render() {
        return (
            <div className = "board">
                {this.state.notes.map(this.eachNote)}
                <button className = "btn btn-sm btn-success glyphicon glyphicon-plus" onClick={this.add}/>
            </div>
        );
    }
}
