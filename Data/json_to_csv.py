import pandas as pd

# Load JSON file
json_file = "Data\orders_returned_info.json"  # Replace with your file path
df = pd.read_json(json_file)

# Save as CSV
csv_file = "orders_returned.csv"
df.to_csv(csv_file, index=False)

print(f"CSV file saved as {csv_file}")
