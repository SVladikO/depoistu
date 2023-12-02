#### RELEASE STEPS

Update version in time when people doesn't use app

##### !!! IMPORTANT
##### project version on BE,FE is responsible by update FE localStorage.

Steps
1. Set new the same versions on stage for FE, BE
2. Create tag for both and push
3. 
3. Change lastUpdateDate for FE to current
3. Create new tag with new version > commit > push
4. Make build of FE
5. Push BE main
6. Copy FE part to hostinger
7. Create release in github FE & BE

### Requirements
1. BE & FE has the same versions
