# FLORIDA ENERGY SYSTEMS CONSORTIUM REDESIGN

## OBJECTIVE
Assess the [Florida Energy Systems Consortion (FESC) website](http://floridaenergy.ufl.edu/) and recommend deliverables for a redesign that meets the following goals:
1. Bring up to today's website standard for accessibility, performance, and ease of use
2. Effectively support the primary audience, core tasks, and devices

## SITE ASSESSMENT

### ACCESSIBILITY AUDIT

The eight pages in the top level navigation were audited to understand how well the website meets minimum W3C Accessibility Guidelines (Level A). This evaluation was performed in Chrome with [SiteImprov](https://siteimprove.com/).

WCAG 2.0 Guideline  |  Meets Minimum?  | No. Issues
--- | --- | ---		
**1  Perceivable**  |   |  
**1.1**  Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.  |  No - Images missing alt tags on most pages  | 22
**1.2**  Provide alternatives for time-based media.   |    |  
**1.3**  Create content that can be presented in different ways (for example simpler layout) without losing information or structure. |  No - Presentation attributes should be in CSS, not HTML; Heading is missing text; Center tag should not be used; Input field is missing description  |  135
**1.4**  Make it easier for users to see and hear content including separating foreground from background. |  No - Link identified only by color  |  1
**2  Operable**  |   |  
**2.1**  Make all functionality available from a keyboard.  |    |  
**2.2**  Provide users enough time to read and use content.  |    |  
**2.3**  Do not design content in a way that is known to cause seizures.  |    |  
**2.4**  Provide ways to help users navigate, find content, and determine where they are.  |  No - Links are indistinguishable; Image link is missing alt text  |  231
**3  Understandable**  |   |  
**3.1**  Make text content readable and understandable.  |  No - Set the language of the page  |  8
**3.2**  Make Web pages appear and operate in predictable ways.  |    |  
**3.3**  Help users avoid and correct mistakes.  |  No - Input field is missing a description  |  2
**4  Robust**  |   |  
**4.1**  Maximize compatibility with current and future user agents, including assistive technologies.  |  No - Input field is missing ARIA or title attribute  |  3

### MOBILE RESPONSIVENESS

This website is _**not mobile friendly**_ as evaluated by [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly).

Full results: [https://search.google.com/test/mobile-friendly?id=EeZOjLrySIzta-Rm3QLaVA](https://search.google.com/test/mobile-friendly?id=EeZOjLrySIzta-Rm3QLaVA)

Improvements needed:
- Clickable elements too close together
- Viewport not set
- Text too small to read 
- Content wider than screen

### PERFORMANCE

This website took 13-15 seconds for initial page load which is _**below average**_ performance as evaluated by [WebPageTest](https://www.webpagetest.org) and [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights).

- WebPageTest results: [https://www.webpagetest.org/result/180411_WR_522953adc22016e1cc33e4eedba0550e/](https://www.webpagetest.org/result/180411_WR_522953adc22016e1cc33e4eedba0550e/)

- PageSpeed Insights results: [https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Ffloridaenergy.ufl.edu%2F&tab=mobile](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Ffloridaenergy.ufl.edu%2F&tab=mobile)

Metrics to aim for: 
- According to Google, 53% of people will leave a mobile page if it takes longer than 3 seconds to load. 
- The average page load speed for business and industry websites in 2018 is 8.7 seconds.

Improvements needed:
- Reduce server response time
- Eliminate render-blocking JavaScript and CSS in above-the-fold content
- Leverage browser caching
- Optimize images


### FUNCTIONALITY

Manual QA yielded the following non-functional issues:
- **Homepage:** Download brochure button is not functional
- **Homepage:** Linkedin icon opens image, rather than navigating to URL
- **Energy Industry page:** Clicking image grid navigates to full screen with thumbnail, rather than larger image
- **Advisory Board page:** Clicking image navigates to full screen with thumbnail, rather than larger image

HTML validator yielded 35 errors and 25 warnings ([full report](https://validator.w3.org/check?uri=http%3A%2F%2Ffloridaenergy.ufl.edu%2F&charset=%28detect+automatically%29&doctype=Inline&group=0)).

CSS validator yielding 0 errors and 35 warnings ([full report](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fcheck%3Furi%3Dhttp%253A%252F%252Ffloridaenergy.ufl.edu%252F%26charset%3D%2528detect%2Bautomatically%2529%26doctype%3DInline%26group%3D0&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en))

### EASE OF USE

**Findability** - It is not easy to distinguish which content is for general consumer education vs industry expert research vs official standards.

**Discoverability** - It is not easy to see research, events, outreach, and education for any one energy type because not all pages are segmented by energy type.

**Meeting user expectations** - It is not easy to understand whether clicking on a link will navigate to a different page on the website, an external website, or open a document.

## REQUIREMENTS

### AUDIENCE & CORE TASKS

This site is intended to service the following audiences:
- General consumer
- Energy experts and researchers
- University and government officials

This site is intended to support core tasks for the following audiences:

AUDIENCE  | CORE TASKS
--- | ---
General consumer  |  As a consumer, I want to attend events, watch videos, or read information so I can learn about different energy systems.
Energy experts and researchers  | As an expert or researcher, I want to learn about new and past research projects so I can contribute my knowledge and help grow the body of knowledge within my specialty.
University and government officials | As a university or government official, I want to know what we've learned through research and development so I can advocate for alternative energy strategies, energy efficiencies, and further economic development for the state.

### DEVICE & PLATFORM 

It's important that this website supports both mobile and desktop computers, and the full spectrum of platforms to sufficiently reach all three audiences.

- Consumers are more likely to access this website on a mobile phone. Experts, researchers, and officials are more likely to access this website on a desktop computer. 

- Consumers are more likely to access this website on Apple or Android phones or tablets. Experts, researchers, and officials are more likely to access this website on a Windows computer.

### RECOMMENDATIONS

At a high level, the following recommendations are provided for a responsive redesign of the FESC website:
- Redesign page layouts and information organization to increase ease of use for core tasks relative to each audience
- Make pages responsive so they can be easily accessed on mobile, tablet, or desktop
- Address accessibility, performance, and functional issues noted above

## PROPOSED DELIVERABLES

**DELIVERABLE** | **DEFINITION OF DONE**
--- | ---
Full site content audit  |  Spreadsheet of all pages on the website that identifies: URL, Job of the page, Primary audience, Content quality, SEO targets, recommendation for refining content
Information architecture rework | Explore different IA treatments for organizing the site and then test against core tasks success to determine how to move forward
Responsive pages redesign  |  Wireframe and then implement responsive layouts that incorporate new IA and content refinements, and fluidly scale from mobile to tablet to desktop
Address accessibility issues  | Implement minimum requirements on website to meet W3CAG (Level A)
Improve performance | Improve page load speed to meet mobile and industry averages (3 seconds and 8 seconds respectively)
Fix functional issues | Fix images, links, and buttons that don't work as expected

## FONT, COLOR, AND LAYOUT

### INSPIRATION & TEARDOWNS

Green struck me as the appropriate color to lead with for the identity of the site because it has a strong association with nature. I looked to prominent energy brands to confirm my suspicions (green or blue feature prominently on most) and a few non-energy sites that incorporate the color green nicely into their identity.

Sites reviewed:
- [Energy Star](https://www.energystar.gov/)
- [Dept of Energy](https://www.energy.gov/)
- [National Renewable Energy Laboratory](https://www.nrel.gov/)
- [Institute for Energy Research](https://instituteforenergyresearch.org/)
- [Puget Sound Energy](https://pse.com/Pages/default.aspx)
- [John Deere](https://www.deere.com/en/)
- [Houzz.com](https://www.houzz.com/)
- [Quickbooks](https://quickbooks.intuit.com/)

### DESIGN SYSTEM FAVORITE
- [Quickbooks](https://designsystem.quickbooks.com/foundations/color-palette/) 

### FESC STYLE GUIDE

[Style Guide](https://trinasch.github.io/florida-energy/docs/styleguide.html)

As a result, I developed a simple style guide for Florida Energy Systems Consortium. It features green as primary and blue as secondary color on a white background, with shades of gray available for most other things. The fonts I selected are sans serif to achieve an authoritative and approachable style.

### FESC WEBSITE LAYOUTS

[FESC Layouts](https://github.com/trinasch/florida-energy/tree/master/docs/mocks)

I've mocked up layouts for the following pages: 
- Homepage
- Find Research page
- Solar Energy page
- About page
- Contact page

I also assembled the structured content for the About page and Solar Energy page in .js files, so that I can populate the modules on each respective page.

Since the top navigation and footer appear on all pages, those are also candidates for a modular approach.


### GOOGLE CHART

I added the two data sets in a single 'column chart' from Google Charts to index.html. One bar to show how much renewable energy is produced each year and the other to show what's consumed. I included the default legend, and added options for the subtitle, height / width of chart, and color of bars for each series.

[Google Charts Documentation: Column Chart](https://developers.google.com/chart/interactive/docs/gallery/columnchart)

By showing the two data sets in the same chart with differences in bar height, you can clearly see that consumption outpaces production each year by 2x-3x, which helps emphasize why energy efficiency and continued energy research is important.
