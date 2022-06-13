import React from "react";

export default function YoutubeEmbed({ embed }) {
    return (
        <iframe
            src={`https://www.youtube.com/embed/${embed}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Najnowszy utwór"
            className="w-full aspect-video"
        />
    );
}
