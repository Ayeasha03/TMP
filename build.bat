@echo off

REM Create folders if they don't exist
if not exist dist mkdir dist
if not exist dist\css mkdir dist\css
if not exist dist\js mkdir dist\js
if not exist dist\img mkdir dist\img

REM Compile TypeScript to dist/js
tsc src\ts\script.ts --outDir dist\js --target ES6

REM Copy HTML
for %%f in (src\*.html) do copy "%%f" dist\

REM Copy CSS
xcopy src\css\* dist\css\ /E /Y /I

REM Copy images
xcopy src\img\* dist\img\ /E /Y /I

echo Build complete!
pause
