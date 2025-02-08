import os
import pandas as pd
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

# Path to your local HTML file
local_file_path = "file:///C:\Users/123je/2024/webdev/behr-paint-colors.html"  # Update the path

# Ensure the folder exists or create it
output_dir = "output"
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Setup Selenium
options = webdriver.ChromeOptions()
options.add_argument("--headless")  # Run in background
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")

# Start WebDriver
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

# Open the local HTML file
driver.get(local_file_path)

# Wait for elements to load (you can adjust the class name here if necessary)
try:
    WebDriverWait(driver, 10).until(
        EC.presence_of_all_elements_located((By.CLASS_NAME, "color-entry"))
    )
except:
    print("❌ Colors did not load!")
    driver.quit()
    exit()

# Extract color data
colors = []
color_elements = driver.find_elements(By.CLASS_NAME, "color-entry")  # Adjust selector if needed

for color in color_elements:
    try:
        name = color.find_element(By.TAG_NAME, "h3").text.strip()  # Color name
        rgb = color.find_element(By.CLASS_NAME, "rgb").text.strip()  # RGB
        colors.append({"Name": name, "RGB": rgb})
    except:
        continue  # Skip if missing

# Close Selenium
driver.quit()

# Save to CSV in the 'output' directory
output_path = os.path.join(output_dir, "behr_paint_colors.csv")
df = pd.DataFrame(colors)
df.to_csv(output_path, index=False)

print(f"✅ Scraped {len(colors)} colors! Data saved as '{output_path}'.")
