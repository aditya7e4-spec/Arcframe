const GitCheatsheet = () => {
  const commands = [
    {
      step: '01',
      title: 'Initialize a repository',
      code: 'git init',
      description: 'Creates a new Git repo in the current folder.',
    },
    {
      step: '02',
      title: 'Check repository status',
      code: 'git status',
      description: 'Shows changed files, staged files, and untracked files. The most used command.',
    },
    {
      step: '03',
      title: 'Add files to staging',
      codes: ['git add filename', 'git add .'],
      description: 'Prepare files for commit by adding them to the staging area.',
    },
    {
      step: '04',
      title: 'Commit changes',
      codes: ['git commit -m "message"', 'git commit -m "Add homepage layout"'],
      description: 'Save your changes to the repository with a descriptive message.',
    },
    {
      step: '05',
      title: 'Connect to remote',
      code: 'git remote add origin https://github.com/username/repo.git',
      description: 'Link your local repository to a remote one on GitHub or similar.',
    },
    {
      step: '06',
      title: 'Push to remote',
      codes: ['git push -u origin main', 'git push'],
      description: 'Upload your commits to the remote repository.',
    },
    {
      step: '07',
      title: 'Pull latest changes',
      code: 'git pull',
      description: 'Download and merge the latest code from the remote repository.',
    },
  ]

  const bonus = [
    { title: 'Clone a repo', code: 'git clone https://github.com/username/repo.git' },
    { title: 'Check commit history', code: 'git log' },
  ]

  return (
    <main>
      <section className="section" id="git-ref">
        <div className="section-head reveal" style={{ '--delay': '70ms' }}>
          <p>Developer Reference</p>
          <h3>Git Commands Cheatsheet</h3>
        </div>

        <div className="git-commands">
          {commands.map((cmd, index) => (
            <article className="git-card reveal" key={index} style={{ '--delay': `${110 + index * 90}ms` }}>
              <div className="git-card-header">
                <span className="git-step">{cmd.step}</span>
                <h4>{cmd.title}</h4>
              </div>

              <div className="git-code-block">
                {cmd.code && <code>{cmd.code}</code>}
                {cmd.codes && (
                  <>
                    {cmd.codes.map((c, i) => (
                      <code key={i}>{c}</code>
                    ))}
                  </>
                )}
              </div>

              <p className="git-description">{cmd.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="git-bonus">
        <div className="section-head reveal" style={{ '--delay': '80ms' }}>
          <p>Extra Utilities</p>
          <h3>Bonus Commands</h3>
        </div>

        <div className="bonus-grid">
          {bonus.map((item, index) => (
            <article className="bonus-card reveal" key={index} style={{ '--delay': `${130 + index * 100}ms` }}>
              <h4>{item.title}</h4>
              <div className="git-code-block">
                <code>{item.code}</code>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default GitCheatsheet