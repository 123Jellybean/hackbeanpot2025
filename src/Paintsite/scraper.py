from bs4 import BeautifulSoup
import json
import requests

url = "https://www.cloford.com/resources/colours/500col.htm"
response = requests.get(url)
print(response.text[:200]) 

# Ensure we got a valid response
if response.status_code != 200:
    print(f"Failed to retrieve the page. Status code: {response.status_code}")
    exit()

# Parse the HTML using BeautifulSoup
soup = BeautifulSoup(response.text, 'html.parser')

# Example: Assuming the Behr colors are in divs with class "card-body"
color_data = []

for color_section in soup.find_all("tr"):  
    tds = color_section.find_all("td")  # Get all <td> elements in the row
    
    if len(tds) >= 4:  # Ensure there are enough <td> elements
        name = tds[0].get_text(strip=True)  # Extract color name
        hex_code = tds[3].get_text(strip=True)  # Extract hex code

        color_data.append({
            "name": name,
            "hex": hex_code
        })

# Save the scraped color data into a JSON file
with open("behr_colors.json", "w") as outfile:
    json.dump(color_data, outfile, indent=2)

print(f"Scraped {len(color_data)} colors and saved to 'behr_colors.json'.")


