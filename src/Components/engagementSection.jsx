import React from "react";
import Link from "next/link";

const ACCENT_UPCOMING = "#2d6a4f";
const ACCENT_PAST = "#1b2a41";

function ResourcePill({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: "2em",
        padding: "0 0.75em",
        borderRadius: "999px",
        fontSize: "0.8rem",
        fontWeight: 600,
        background: "#1b2a41",
        color: "#f1f2ee",
        textDecoration: "none",
        letterSpacing: "0.02em",
        transition: "opacity 0.15s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      {label}
    </a>
  );
}

export default function EngagementSection({ engagement, upcoming = false }) {
  const {
    title,
    userGroup,
    location,
    eventPage,
    slides,
    code,
    afterEvent,
  } = engagement;

  const afterEventLinks = [
    { label: "LinkedIn", url: afterEvent?.linkedin },
    { label: "X", url: afterEvent?.x },
    { label: "YouTube", url: afterEvent?.youtube },
  ].filter((link) => link.url);

  const accentColor = upcoming ? ACCENT_UPCOMING : ACCENT_PAST;

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "14px",
        boxShadow: "0 2px 12px rgba(27,42,65,0.07)",
        borderLeft: `4px solid ${accentColor}`,
        padding: "1.25em 1.5em",
        marginBottom: "1em",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "1em",
          flexWrap: "wrap",
          marginBottom: "0.35em",
        }}
      >
        <a
          href={eventPage}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", flex: 1 }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "1.15rem",
              fontWeight: 700,
              color: "#1b2a41",
              lineHeight: 1.35,
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {title}
          </h2>
        </a>
        {upcoming && (
          <a
            href={eventPage}
            target="_blank"
            rel="noopener noreferrer"
            className="rsvp-badge"
            style={{
              textDecoration: "none",
              display: "inline-block",
              padding: "0.25em 0.9em",
              borderRadius: "999px",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              background: "#2d6a4f",
              color: "#ffffff",
              whiteSpace: "nowrap",
              alignSelf: "flex-start",
            }}
          >
            RSVP NOW
          </a>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.25em 1.5em",
          marginBottom: "0.85em",
        }}
      >
        <a
          href={userGroup.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "0.9rem",
            color: "#4b5563",
            textDecoration: "none",
            fontWeight: 500,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#1b2a41")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
        >
          By {userGroup.name}
        </a>
        <a
          href={location.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "0.9rem",
            color: "#6b7280",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#1b2a41")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
        >
          @ {location.name}
        </a>
      </div>

      {(slides || code || afterEventLinks.length > 0) && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5em", alignItems: "center" }}>
          {slides && <ResourcePill href={slides} label="Slides" />}
          {code && <ResourcePill href={code} label="Code" />}
          {afterEventLinks.map(({ label, url }) => {
            const hostname = new URL(url).hostname;
            return (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2em",
                  height: "2em",
                  borderRadius: "999px",
                  background: "#f3f4f6",
                  overflow: "hidden",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://www.google.com/s2/favicons?sz=64&domain=${hostname}`}
                  alt={label}
                  style={{ width: "28px", height: "28px", objectFit: "contain" }}
                />
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
