# lab

Intelligent Software Engineering Research Laboratory


 Below is the complete step-by-step guide in a Markdown format. You can save this as `README.md` in your repository so that all contributors can follow along:

```markdown
# Updating the Laboratory Website

This guide explains how to update the Intelligent Software Engineering laboratory website built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and hosted on GitHub Pages. The website supports both English and Persian. Follow the steps below to fork the repository, update the Markdown content, build the site locally, and submit your changes through a pull request.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Step 1: Fork the Repository](#step-1-fork-the-repository)
- [Step 2: Clone Your Fork Locally](#step-2-clone-your-fork-locally)
- [Step 3: Create a New Branch](#step-3-create-a-new-branch)
- [Step 4: Update Markdown and Configuration Files](#step-4-update-markdown-and-configuration-files)
- [Step 5: Build the Site Locally](#step-5-build-the-site-locally)
- [Step 6: Preview the Site Locally](#step-6-preview-the-site-locally)
- [Step 7: Commit and Push Your Changes](#step-7-commit-and-push-your-changes)
- [Step 8: Open a Pull Request (PR)](#step-8-open-a-pull-request-pr)
- [Additional Recommendations](#additional-recommendations)

---

## Prerequisites

- A GitHub account.
- Git installed on your local machine.
- Python with `pip` installed.
- MkDocs and MkDocs Material:
  ```bash
  pip install mkdocs-material
  ```

---

## Step 1: Fork the Repository

1. **Navigate to the Repository:**  
   Open the GitHub page of the laboratory website repository.

2. **Fork the Repository:**  
   Click the **Fork** button (located in the upper-right corner) to create your own copy of the project under your GitHub account.

---

## Step 2: Clone Your Fork Locally

1. **Copy the Repository URL:**  
   On your forked repository page, click the green **Code** button and copy the HTTPS or SSH URL.

2. **Clone the Repository:**  
   Open your terminal and run:
   ```bash
   git clone https://github.com/yourusername/lab-website.git
   ```
3. **Navigate to the Repository Directory:**
   ```bash
   cd lab-website
   ```

---

## Step 3: Create a New Branch

Create a separate branch for your changes to keep things organized:
```bash
git checkout -b update-content
```
*Tip: Use a branch name that clearly indicates the purpose of your changes (e.g., `update-english`, `update-persian`).*

---

## Step 4: Update Markdown and Configuration Files

1. **Locate the Content:**  
   The Markdown files are usually in the `/docs` folder or organized into subdirectories like `/en` (English) and `/fa` (Persian).

2. **Edit Markdown Files:**  
   Open the files with your favorite text editor to update content. Make sure to:
   - Update lab information, research details, or any new announcements.
   - Verify that both English and Persian content is placed in their respective folders.

3. **Update the `mkdocs.yml` and `mkdocs_en.yml` Files:**  
   Adjust the navigation structure if needed. For example, to support bilingual navigation update `mkdocs_en.yml` in addition to the `mkdocs.yml` file. 
   Using the same structural update for both sites ensures the site menu clearly separates the two languages.

---

## Step 5: Build the Site Locally

Compile the Markdown into static HTML files so you can review your changes:
```bash
mkdocs build
```
This command generates a `site` directory containing the updated site.

---

## Step 6: Preview the Site Locally

1. **Start the Local Development Server:**
   ```bash
   mkdocs serve
   ```
2. **Access the Site:**  
   Open your browser and go to [http://127.0.0.1:8000](http://127.0.0.1:8000).
   - **Verify:** Make sure that both the English and Persian versions display correctly and that text direction (RTL for Persian) is properly applied.

3. **Iterate as Needed:**  
   If you spot issues or require further adjustments, edit your files and repeat the build/serve steps until you are satisfied.

---

## Step 7: Commit and Push Your Changes

1. **Stage Your Changes:**
   ```bash
   git add .
   ```
2. **Commit Your Changes:**  
   Write a clear commit message, for example:
   ```bash
   git commit -m "Update markdown content for bilingual support and adjust navigation in mkdocs.yml"
   ```
3. **Push the New Branch to Your Fork:**
   ```bash
   git push origin update-content
   ```

---

## Step 8: Open a Pull Request (PR)

1. **Create a New Pull Request:**  
   - Go to your forked repository on GitHub.
   - Click on the **Compare & pull request** button.

2. **Ensure Correct Target:**  
   Verify that the base repository is the main project repository, and your branch (`update-content`) is set as the compare branch.

3. **Describe Your Changes:**  
   Include details about what you updated (content changes, navigation adjustments, etc.) in the PR description.

4. **Submit the PR:**  
   Click the **Create pull request** button. Your changes will now be reviewed by the maintainers.

---

## Additional Recommendations

- **Documentation:**  
  Consider creating or updating a CONTRIBUTING.md file with these instructions for future contributors.

- **CSS and Localization:**  
  Verify that your site’s CSS supports RTL for Persian and LTR for English appropriately. Adjust styles if necessary.

- **Continuous Integration (CI):**  
  Setting up CI (e.g., GitHub Actions) to automatically build the site when a PR is submitted can help catch errors early.

- **Communication:**  
  For larger updates or if you have questions, consider opening an issue on GitHub to discuss changes before finalizing your PR.

---

Thank you for contributing to the Intelligent Software Engineering website. Happy updating!
```

 