import SermonWidget from "../widgets/SermonWidget";
function Sermons() {
    return (
        <div className="sermons-page">
            <h1 className="sermons-title">Recent Sermons</h1>
            <p className="sermons-description">Stay inspired by listening to our recent sermons.</p>
            <SermonWidget />
        </div>
    );
}

export default Sermons;