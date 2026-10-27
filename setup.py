from setuptools import setup, find_packages

with open("requirements.txt") as f:
    install_requires = f.read().strip().split("\n")

setup(
    name="construct_erpnext",
    version="0.0.1",
    description="Construction ERP portal for ERPNext v16 - replicating o4bi.com features",
    author="Sovereign Technology",
    author_email="services@sovtech.pro",
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    install_requires=install_requires,
)
