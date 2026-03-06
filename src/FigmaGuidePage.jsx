import { useState } from 'react'

const tabs = [
  'Grids & Spacing',
  'Typography',
  'Colors',
  'Breakpoints',
  'Components',
  'Figma Tips',
]

const gridRows = [
  ['Mobile S', '320px', '4', '16px', '16px'],
  ['Mobile M', '375-390px', '4', '16px', '16-24px'],
  ['Tablet', '768px', '8', '20px', '40px'],
  ['Tablet L', '1024px', '12', '20px', '40px'],
  ['Desktop', '1280px', '12', '24px', '80px'],
  ['Desktop L', '1440px', '12', '24px', '80-120px'],
  ['Desktop XL', '1920px', '12', '32px', '120px'],
]

const desktopTypeRows = [
  ['Display / H1', '56-72px', '700-800', '1.1'],
  ['H2', '40-48px', '700', '1.2'],
  ['H3', '28-32px', '600', '1.25'],
  ['H4', '22-24px', '600', '1.3'],
  ['H5', '18-20px', '500-600', '1.35'],
  ['Body Large', '18px', '400', '1.6'],
  ['Body', '16px', '400', '1.6'],
  ['Body Small', '14px', '400', '1.5'],
  ['Caption / Label', '12px', '500', '1.4'],
]

const mobileTypeRows = [
  ['H1', '32-40px'],
  ['H2', '26-30px'],
  ['H3', '20-24px'],
  ['Body', '15-16px'],
  ['Small', '13px'],
]

const fontPairingRows = [
  ['Fraunces', 'DM Sans', 'Editorial / Luxury'],
  ['Syne', 'Inter', 'Tech / Modern'],
  ['Playfair Display', 'Source Sans 3', 'Classic / Magazine'],
  ['Space Grotesk', 'Figtree', 'Startup / Clean'],
  ['Bricolage Grotesque', 'Nunito', 'Friendly / Playful'],
]

const colorRows = [
  ['Primary', 'Brand color: CTAs, links, active states'],
  ['Secondary', 'Supporting accent: badges, highlights'],
  ['Success', 'Positive states, confirmations'],
  ['Warning', 'Caution states'],
  ['Error / Danger', 'Errors, destructive actions'],
  ['Neutral 900', 'Primary text'],
  ['Neutral 600', 'Secondary text'],
  ['Neutral 300', 'Borders, dividers'],
  ['Neutral 100', 'Subtle backgrounds'],
  ['Surface / BG', 'Page background'],
]

const breakpointRows = [
  ['Mobile S', '320px', '4', 'Small phones'],
  ['Mobile M', '375-390px', '4', 'iPhone standard'],
  ['Mobile L', '414-430px', '4', 'Large phones'],
  ['Tablet', '768px', '8', 'iPad portrait'],
  ['Tablet L', '1024px', '12', 'iPad landscape / small laptop'],
  ['Desktop', '1280px', '12', 'Common laptop'],
  ['Desktop L', '1440px', '12', 'Standard design canvas'],
  ['Desktop XL', '1920px', '12', 'Full HD monitors'],
]

const frameRows = [
  ['Mobile', '390 x 844'],
  ['Tablet', '768 x 1024'],
  ['Desktop', '1440 x 900'],
  ['Desktop Wide', '1920 x 1080'],
]

const buttonRows = [
  ['XS', '28px', '12px', '12px'],
  ['SM', '36px', '16px', '14px'],
  ['MD (default)', '44px', '20px', '15px'],
  ['LG', '52px', '28px', '16px'],
  ['XL', '60px', '36px', '18px'],
]

const inputRows = [
  ['Small', '36px', '13px'],
  ['Medium', '44px', '15px'],
  ['Large', '52px', '16px'],
]

const zIndexRows = [
  ['Base content', '0'],
  ['Sticky header', '100'],
  ['Dropdowns / Popovers', '200'],
  ['Drawers / Sidebars', '300'],
  ['Modals', '400'],
  ['Toasts / Notifications', '500'],
  ['Tooltips', '600'],
]

const shortcutRows = [
  ['F', 'Insert Frame'],
  ['R', 'Rectangle'],
  ['T', 'Text tool'],
  ['A', 'Auto Layout'],
  ['Cmd/Ctrl + G', 'Group'],
  ['Cmd/Ctrl + Alt + G', 'Frame selection'],
  ['Cmd/Ctrl + D', 'Duplicate'],
  ['Cmd/Ctrl + /', 'Quick actions'],
  ['Alt + click', 'Copy distance to element'],
  ['Cmd/Ctrl + Shift + K', 'Place image'],
  ['Cmd/Ctrl + E', 'Export'],
]

const plugins = ['Unsplash', 'Iconify', 'Contrast', 'Figma Tokens', 'Responsify', 'Chart']

function DataTable({ headings, rows }) {
  return (
    <div className="figma-table">
      <div className="figma-table-row figma-table-head figma-table-row--auto" style={{ gridTemplateColumns: `repeat(${headings.length}, minmax(120px, 1fr))` }}>
        {headings.map((heading) => (
          <span key={heading}>{heading}</span>
        ))}
      </div>
      {rows.map((row) => (
        <div className="figma-table-row figma-table-row--auto" key={row.join('-')} style={{ gridTemplateColumns: `repeat(${headings.length}, minmax(120px, 1fr))` }}>
          {row.map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>
      ))}
    </div>
  )
}

function FigmaGuidePage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <main>
      <section className="hero section figma-hero" id="figma-top">
        <div className="hero-copy">
          <p className="kicker reveal" style={{ '--delay': '80ms' }}>
            Figma Design System
          </p>
          <h1 className="reveal" style={{ '--delay': '150ms' }}>
            Figma Web Design Guide
          </h1>
          <p className="lead reveal" style={{ '--delay': '220ms' }}>
            Interactive reference based on the markdown guide, organized with tab logic from the JSX prototype.
          </p>
        </div>

        <aside className="hero-panel reveal" style={{ '--delay': '280ms' }}>
          <p className="panel-label">Quick Rules</p>
          <div className="stat-row">
            <h2>1280px</h2>
            <p>Max content width, centered on larger screens.</p>
          </div>
          <div className="stat-row">
            <h2>8pt</h2>
            <p>Use spacing multiples of 8px (or 4px for tight gaps).</p>
          </div>
          <div className="stat-row">
            <h2>4.5:1</h2>
            <p>WCAG AA contrast target for regular text.</p>
          </div>
        </aside>
      </section>

      <section className="section" id="figma-tabs">
        <div className="figma-tabs reveal" style={{ '--delay': '90ms' }}>
          {tabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={`figma-tab ${activeTab === index ? 'is-active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="figma-panel reveal" style={{ '--delay': '130ms' }}>
          {activeTab === 0 && (
            <>
              <div className="section-head">
                <p>Grids & Spacing</p>
                <h3>Columns, gutters, margins, and spacing rhythm.</h3>
              </div>
              <DataTable headings={['Screen', 'Width', 'Columns', 'Gutter', 'Margin']} rows={gridRows} />
              <article className="figma-note">
                <h4>8pt spacing scale</h4>
                <p>4 - 8 - 12 - 16 - 20 - 24 - 32 - 40 - 48 - 64 - 80 - 96 - 128</p>
              </article>
            </>
          )}

          {activeTab === 1 && (
            <>
              <div className="section-head">
                <p>Typography</p>
                <h3>Desktop and mobile type scales.</h3>
              </div>
              <DataTable headings={['Role', 'Size', 'Weight', 'Line Height']} rows={desktopTypeRows} />
              <DataTable headings={['Mobile Role', 'Size']} rows={mobileTypeRows} />
              <DataTable headings={['Display Font', 'Body Font', 'Vibe']} rows={fontPairingRows} />
              <article className="figma-note">
                <h4>Readability</h4>
                <p>Do not use body text below 14px. Reduce desktop sizes by roughly 20-30% for mobile.</p>
              </article>
            </>
          )}

          {activeTab === 2 && (
            <>
              <div className="section-head">
                <p>Colors</p>
                <h3>Semantic color roles and light/dark guidance.</h3>
              </div>
              <DataTable headings={['Role', 'Purpose']} rows={colorRows} />
              <article className="figma-note">
                <h4>Mode and contrast rules</h4>
                <p>Use semantic tokens, avoid pure black/white in dark mode, and target 4.5:1 text contrast.</p>
              </article>
            </>
          )}

          {activeTab === 3 && (
            <>
              <div className="section-head">
                <p>Breakpoints</p>
                <h3>Standard responsive widths and frame sizes.</h3>
              </div>
              <DataTable headings={['Name', 'Width', 'Columns', 'Device']} rows={breakpointRows} />
              <DataTable headings={['Screen', 'Frame Size']} rows={frameRows} />
              <article className="figma-note">
                <h4>Responsive rules</h4>
                <p>Design mobile-first, keep touch targets at least 44 x 44px, and hold line length to 60-80 chars.</p>
              </article>
            </>
          )}

          {activeTab === 4 && (
            <>
              <div className="section-head">
                <p>Components</p>
                <h3>Sizing and anatomy references for reusable UI building blocks.</h3>
              </div>
              <DataTable headings={['Button Size', 'Height', 'Padding (H)', 'Font Size']} rows={buttonRows} />
              <DataTable headings={['Input Size', 'Height', 'Font Size']} rows={inputRows} />
              <DataTable headings={['Layer', 'Z-Index']} rows={zIndexRows} />
              <article className="figma-note">
                <h4>Card anatomy</h4>
                <p>Padding 20-28px, radius 12-16px, 1px border, 16:9 or 4:3 media, and 12-16px internal gaps.</p>
              </article>
            </>
          )}

          {activeTab === 5 && (
            <>
              <div className="section-head">
                <p>Figma Tips</p>
                <h3>Shortcuts, Auto Layout habits, and tooling.</h3>
              </div>
              <DataTable headings={['Shortcut', 'Action']} rows={shortcutRows} />

              <div className="figma-components-grid">
                <article className="figma-card">
                  <h4>Auto Layout best practices</h4>
                  <ul>
                    <li>Prefer Auto Layout over manual spacing.</li>
                    <li>Use Hug for content-fit containers and Fill for stretch elements.</li>
                    <li>Use Gap for spacing between children, not margin hacks.</li>
                    <li>Combine nested Auto Layouts for responsive compositions.</li>
                    <li>Use Min/Max width constraints for better scaling behavior.</li>
                  </ul>
                </article>
                <article className="figma-card">
                  <h4>Component and token setup</h4>
                  <ul>
                    <li>Maintain a dedicated Styles page for color, text, and effects.</li>
                    <li>Use variables for tokens across light and dark modes.</li>
                    <li>Name components hierarchically, for example Button/Primary/Default.</li>
                    <li>Use variants for states: Default, Hover, Focused, Disabled.</li>
                    <li>Expose component properties for text, icon swaps, and toggles.</li>
                  </ul>
                </article>
              </div>

              <article className="figma-card">
                <h4>Plugins worth installing</h4>
                <div className="figma-tags">
                  {plugins.map((plugin) => (
                    <span key={plugin}>{plugin}</span>
                  ))}
                </div>
              </article>
            </>
          )}
        </div>
      </section>
    </main>
  )
}

export default FigmaGuidePage
